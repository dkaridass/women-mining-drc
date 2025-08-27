import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Router, Route } from 'wouter';
import HomePage from './pages/home';
import NewsArticlePage from './pages/news-article';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/news/:slug" component={NewsArticlePage} />
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
