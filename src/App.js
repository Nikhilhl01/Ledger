import "./App.css";
import Navbar from "./components/Home/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Hompage from "./components/Home/Hompage";
import Transaction from "./components/transactions/Transaction";
import Notfound from "./components/Home/Notfound";
import { AuthProvider } from "./context/authContext";
import CreateTransaction from "./components/transactions/CreateTransaction";

import { Profile } from "./components/user/Profile";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Toaster richColors position="top-center" />
          <Navbar />
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Hompage />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/create" element={<CreateTransaction />} />

            <Route path="/transaction" element={<Transaction />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
