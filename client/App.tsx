import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import StartRecovery from "./pages/StartRecovery";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/get-started" element={<SignIn />} />
              <Route path="/start-recovery" element={<StartRecovery />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/features" element={<PlaceholderPage title="Features" />} />
              <Route path="/for-patients" element={<PlaceholderPage title="For Patients" />} />
              <Route path="/for-providers" element={<PlaceholderPage title="For Providers" />} />
              <Route path="/pricing" element={<PlaceholderPage title="Pricing" />} />
              <Route path="/about" element={<PlaceholderPage title="About" />} />
              <Route path="/ai-analysis" element={<PlaceholderPage title="AI Movement Analysis" />} />
              <Route path="/telehealth" element={<PlaceholderPage title="Telehealth Integration" />} />
              <Route path="/analytics" element={<PlaceholderPage title="Healthcare Analytics" />} />
              <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
              <Route path="/research" element={<PlaceholderPage title="Research" />} />
              <Route path="/partners" element={<PlaceholderPage title="Partners" />} />
              <Route path="/news" element={<PlaceholderPage title="News" />} />
              <Route path="/support" element={<PlaceholderPage title="Support Center" />} />
              <Route path="/documentation" element={<PlaceholderPage title="Documentation" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
              <Route path="/compliance" element={<PlaceholderPage title="HIPAA Compliance" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
