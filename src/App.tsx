import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import ProtectedPage from "./Components/ProtectedPage/ProtectedPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {


  return (
    <>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    </>
  )
}

export default App
