import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/front/Home";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/layout/admin/AdminLayout";
import Users from "./pages/admin/Users";
import Skills from "./components/layout/admin/Skills";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
