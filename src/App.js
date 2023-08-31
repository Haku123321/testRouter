import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function A1() {
  return <div>1asdasd</div>;
}
function A2() {
  return <div>2qweqwe</div>;
}
function A3() {
  return <div>3czxcz</div>;
}
function A4() {
  return <div>4gsdgsd</div>;
}
function A5() {
  return <div>5xzrt</div>;
}

function App() {
  return (
    <HashRouter >
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
    </HashRouter>
  );
}

export default App;
