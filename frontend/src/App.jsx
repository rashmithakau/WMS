import { Routes,Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Registration from "./pages/Registration"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<Registration/>}></Route>
      </Routes>
    </>
  )
}

export default App
