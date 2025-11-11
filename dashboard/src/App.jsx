import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./components/Home.jsx"


export const App = () =>{
  return <div>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      </BrowserRouter>
  </div>
}
