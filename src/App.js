import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function A1() {
  return <div>1</div>;
}
function A2() {
  return <div>2</div>;
}
function A3() {
  return <div>3</div>;
}
function A4() {
  return <div>4</div>;
}
function A5() {
  return <div>5</div>;
}

function App() {
  return (
    <BrowserRouter basename="/testRouter">
      <Routes>
        <Route path="/" >
          <Route index element={<A1 />} />
          <Route path="a1" element={<A1 />} />
          <Route path="a2" element={<A2 />} />
          <Route path="a3" element={<A3 />} />
          <Route path="a4" element={<A4 />} />
          <Route path="a5" element={<A5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
