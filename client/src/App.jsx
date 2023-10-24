import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/Auth/SignIn"
import Profile from "./pages/Profile"
import SignUp from "./pages/Auth/SignUp"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
