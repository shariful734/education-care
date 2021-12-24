
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './pages/shared/Header/Header';
import Home from './pages/Home/Home/Home';
import AddCourse from './pages/Admin/AddCourse/AddCourse';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddCourse" element={<AddCourse />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
