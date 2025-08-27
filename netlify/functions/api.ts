import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Database simulation (for Netlify Functions, we'll use a simple in-memory approach)
// In production, you might want to use a service like Supabase, PlanetScale, or similar
const contacts: any[] = [];
const memberships: any[] = [];
const volunteers: any[] = [];
const donations: any[] = [];
const newsletters: any[] = [];

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validation schemas
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const membershipSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  experience: z.string().optional(),
  interests: z.array(z.string()).optional(),
});

const volunteerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  skills: z.array(z.string()).optional(),
  availability: z.string().optional(),
  motivation: z.string().optional(),
});

const donationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  amount: z.number().positive(),
  currency: z.string().default('USD'),
  message: z.string().optional(),
});

const newsletterSchema = z.object({
  email: z.string().email(),
  interests: z.array(z.string()).optional(),
});

// Email notification functions
async function sendContactNotification(data: any) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
  } catch (error) {
    console.error('Failed to send contact notification:', error);
  }
}

// Main handler
export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  const { path, httpMethod } = event;
  const pathSegments = path.replace('/.netlify/functions/api', '').split('/').filter(Boolean);

  try {
    // Handle different endpoints
    if (pathSegments[0] === 'contact' && httpMethod === 'POST') {
      const data = JSON.parse(event.body || '{}');
      const validatedData = contactSchema.parse(data);
      
      contacts.push({ ...validatedData, id: Date.now(), createdAt: new Date().toISOString() });
      await sendContactNotification(validatedData);
      
      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, message: 'Message sent successfully' }),
      };
    }

    // Default response for unknown endpoints
    return {
      statusCode: 404,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Endpoint not found' }),
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};