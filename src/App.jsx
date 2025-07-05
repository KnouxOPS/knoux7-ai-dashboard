import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const text = {
    en: {
      title: "KNOUX7 AI Dashboard",
      subtitle: "Ultra-Premium, Real AI Developer Platform",
      description:
        "Build, review, deploy, and manage production-grade software without limits.",
      features: "Features",
      langToggle: "العربية",
    },
    ar: {
      title: "لوحة تحكم KNOUX7 للذكاء الاصطناعي",
      subtitle: "منصة مطور الذكاء الاصطناعي فائقة الجودة",
      description: "بناء ومراجعة ونشر وإدارة البرمجيات عالية الجودة بدون حدود.",
      features: "الميزات",
      langToggle: "English",
    },
  };

  const currentText = text[language];

  return (
    <div className={`app ${language}`} dir={language === "ar" ? "rtl" : "ltr"}>
      <header className="header">
        <div className="header-content">
          <img
            src="https://i.postimg.cc/MpN9ptBk/Chat-GPT-Image-Jun-9-2025-03-03-59-AM.png"
            alt="KNOUX7 Logo"
            className="logo"
          />
          <h1 className="title">{currentText.title}</h1>
          <button onClick={toggleLanguage} className="lang-toggle">
            {currentText.langToggle}
          </button>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="subtitle">{currentText.subtitle}</h2>
          <p className="description">{currentText.description}</p>
        </section>

        <section className="features-section">
          <h3 className="features-title">{currentText.features}</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>One-Click App Builder</h4>
              <p>
                Create production-ready apps instantly from text description
              </p>
            </div>
            <div className="feature-card">
              <h4>AI Review/Refactor</h4>
              <p>Full code analysis and refactoring by AI agents</p>
            </div>
            <div className="feature-card">
              <h4>Visual UI Designer</h4>
              <p>Drag-and-drop builder with instant code generation</p>
            </div>
            <div className="feature-card">
              <h4>Instant Cloud Deploy</h4>
              <p>Deploy to any cloud/server in one click</p>
            </div>
            <div className="feature-card">
              <h4>Security Analyzer</h4>
              <p>Deep code security scans and auto-fixes</p>
            </div>
            <div className="feature-card">
              <h4>Real-time Collaboration</h4>
              <p>Live multi-user development with AI assistance</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>by Knoux & Sadek Elgazar</p>
      </footer>
    </div>
  );
}

export default App;
