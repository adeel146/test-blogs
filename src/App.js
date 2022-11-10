import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Components/LoginPage";
import Blogs from "./Components/Blogs";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
