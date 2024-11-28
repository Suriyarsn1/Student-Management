import Favlist from "./Component/Favlist"
import Studlist from "./Component/studlist"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./datacontext";
function App() {
  return (
    <div >
      <Data>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Studlist/>}></Route>
          <Route path="/fav" element={<Favlist/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </Data>
    </div>
  );
}
export default App;
