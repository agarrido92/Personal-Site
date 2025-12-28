import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BootExperience from "./BootExperience.jsx";
import ProfessionalLayout from "./pages/professional/ProfessionalLayout";
import ProfessionalHome from "./pages/professional/ProfessionalHome";
import PersonalPage from "./pages/PersonalPage.jsx";

export default function App() {
  const navigate = useNavigate();

  const handleChoose = (mode) => {
    if (mode === "professional") navigate("/professional");
    else if (mode === "personal") navigate("/personal");
  };

  const handleToolChoose = (toolId) => {
    if (toolId === "surprise1") {
      window.open("https://www.youtube.com/watch?v=_Xs1ZCMfa2Y", "_blank", "noopener,noreferrer");
      return;
    }

    if (toolId === "surprise2") {
      window.open("https://www.youtube.com/watch?v=R4N2BRiiPBU", "_blank", "noopener,noreferrer");
      return;
    }

    if (toolId === "surprise3") {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "noopener,noreferrer");
      return;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<BootExperience onChoose={handleChoose} onToolChoose={handleToolChoose}/>} />
      <Route path="/professional" element={<ProfessionalLayout />} >
        <Route index element={<ProfessionalHome />} />
      </Route>
      <Route path="/personal" element={<PersonalPage />} />
    </Routes>
  );
}

