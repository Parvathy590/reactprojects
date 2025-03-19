import Home from "./pages/Home"
import Services from "./pages/Services"


import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Services/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
