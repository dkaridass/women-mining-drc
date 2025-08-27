import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Router, Route } from 'wouter';
import HomePage from './pages/home';
import NewsArticlePage from './pages/news-article';
import FormationTechniquePage from './pages/formation-technique';
import LeadershipPage from './pages/leadership';
import EntrepreneuriatPage from './pages/entrepreneuriat';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/news/:slug" component={NewsArticlePage} />
          <Route path="/programmes/formation-technique" component={FormationTechniquePage} />
          <Route path="/programmes/leadership" component={LeadershipPage} />
          <Route path="/programmes/entrepreneuriat" component={EntrepreneuriatPage} />
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
