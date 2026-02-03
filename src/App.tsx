import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Home, Activity, Summary, Resources } from './pages';
import { FormProvider } from './context/FormContext';
import { AccessibilityProvider } from './context/AccessibilityContext';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity/:index" element={<Activity />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AccessibilityProvider>
        <FormProvider>
          <AppContent />
        </FormProvider>
      </AccessibilityProvider>
    </BrowserRouter>
  );
}

export default App;
