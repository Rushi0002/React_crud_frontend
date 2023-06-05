import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookListing from "./BookListing";
import BookEdit from "./BookEdit";
import BookCreate from "./BookCreate";

function App() {
  return (
    <div className="App">
      <h1 style={{"color":"rgb(91,129,194)","margin":"10px"}}>CRUD Operation Project</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookListing />}></Route>
          <Route path="/books/create" element={<BookCreate/>}></Route>
          <Route path="/books/edit/:id" element={<BookEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
