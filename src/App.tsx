import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { LoadingProvider } from './components/LoadingProvider';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './components/blog/BlogPost';
import { AdminBlogPage } from './pages/admin/AdminBlogPage';
import { EditBlogPage } from './pages/admin/EditBlogPage';
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/legal/TermsOfServicePage';
import { CookiePolicyPage } from './pages/legal/CookiePolicyPage';

function App() {
  return (
    <Router>
      <LoadingProvider>
        <div className="bg-gray-900 min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin/blog" element={<AdminBlogPage />} />
              <Route path="/admin/blog/:slug" element={<EditBlogPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/cookies" element={<CookiePolicyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LoadingProvider>
    </Router>
  );
}

export default App;