// Google Analytics 4 Setup
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID

(function() {
  // Create and append Google Analytics script
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(gtagScript);

  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID', {
    // Enhanced measurement settings
    enhanced_measurement: true,
    // Track file downloads
    track_downloads: true,
    // Track outbound links
    track_outbound_links: true,
    // Track site search
    track_site_search: true,
    // Custom dimensions for WIM DRC
    custom_map: {
      'custom_dimension_1': 'program_type',
      'custom_dimension_2': 'user_location',
      'custom_dimension_3': 'content_category'
    }
  });

  // Custom event tracking for WIM DRC specific actions
  function trackWIMEvent(eventName, parameters = {}) {
    gtag('event', eventName, {
      event_category: 'WIM_DRC_Actions',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }

  // Track program page visits
  function trackProgramView(programName) {
    trackWIMEvent('program_view', {
      program_name: programName,
      event_label: `Programme: ${programName}`
    });
  }

  // Track news article views
  function trackNewsView(articleTitle) {
    trackWIMEvent('news_view', {
      article_title: articleTitle,
      event_label: `Article: ${articleTitle}`
    });
  }

  // Track contact interactions
  function trackContactInteraction(contactType) {
    trackWIMEvent('contact_interaction', {
      contact_type: contactType,
      event_label: `Contact: ${contactType}`
    });
  }

  // Track document downloads
  function trackDocumentDownload(documentName) {
    trackWIMEvent('document_download', {
      document_name: documentName,
      event_label: `Document: ${documentName}`
    });
  }

  // Make functions globally available
  window.WIMAnalytics = {
    trackWIMEvent,
    trackProgramView,
    trackNewsView,
    trackContactInteraction,
    trackDocumentDownload
  };

  // Auto-track page views for SPA
  let currentPath = window.location.pathname;
  function trackPageView() {
    const newPath = window.location.pathname;
    if (newPath !== currentPath) {
      currentPath = newPath;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: newPath,
        page_title: document.title
      });
    }
  }

  // Listen for navigation changes (for SPA)
  window.addEventListener('popstate', trackPageView);
  
  // Track initial page load
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href
  });

})();

// Instructions for setup:
// 1. Go to https://analytics.google.com/
// 2. Create a new Google Analytics 4 property for your website
// 3. Get your Measurement ID (format: G-XXXXXXXXXX)
// 4. Replace 'GA_MEASUREMENT_ID' in this file with your actual ID
// 5. Include this script in your HTML head section
