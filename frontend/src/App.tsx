// App.tsx
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/Login";




const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          {/* You can add more routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
