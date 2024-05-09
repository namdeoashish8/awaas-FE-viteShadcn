import "./App.css"
import MainLayout from "./layout/MainLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
import ListProperty from "./pages/ListProperty"
import Profile from "./pages/Profile"

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/list-property' element={<ListProperty/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
