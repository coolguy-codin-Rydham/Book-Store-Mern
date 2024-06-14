import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {CreateBook, ShowBook, Home, DeleteBook, EditBook} from "./pages"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/create" element={<CreateBook/>}/>
        <Route path="/books/details/:id" element={<ShowBook/>}/>
        <Route path="/books/edit/:id" element={<EditBook/>}/>
        <Route path="/books/delete/:id" element={<DeleteBook/>}/>
      </Routes>
    </Router>
  )
}

export default App
