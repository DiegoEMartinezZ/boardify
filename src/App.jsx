import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./views/Tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
