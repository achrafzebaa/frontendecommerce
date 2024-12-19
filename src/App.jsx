import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./components/admin/articles/Listarticles"
import Insertarticle from "./components/admin/articles/Insertarticle"
import Editarticle from "./components/admin/articles/Editarticle"
import Listcategories from "./components/admin/categories/Listcategories"
import Insertcategories from "./components/admin/categories/Insertcategories"
import Editcategories from "./components/admin/categories/Editcategories"
import Listscategories from "./components/admin/scategories/Listscategories"
import Insertscategories from "./components/admin/scategories/Insertscategories"
import Editscategories from "./components/admin/scategories/Editscategories"
import Menu from "./components/admin/Menu"
import Home from "./components/admin/Home"


const App = () => {
  return (

    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/articles/edit" element={<Editarticle/>}/>

        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategories/>}/>
        <Route path="/categories/edit" element={<Editcategories/>}/>

        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategories/>}/>
        <Route path="/scategories/edit" element={<Editscategories/>}/>

        <Route path="/home" element={<Home/>}/>

      </Routes>
    </Router>
  )
}

export default App
