import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";

// Context
import { ThemeProvider } from "./contexts/ThemeContext";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer.tsx";

// Pages
import HomePage from "./pages/HomePage";
import ToursPage from "./pages/ToursPage.tsx";
import TourDetails from "./pages/TourDetails.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import StaffPage from "./pages/StaffPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";

function App() {
  const { i18n } = useTranslation();

  return (
    <ThemeProvider>
      <Router>
        <div
          className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
          dir={i18n.language === "uz" ? "ltr" : "ltr"}
        >
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/tours/:id" element={<TourDetails />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/booking/:tourId" element={<BookingPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
