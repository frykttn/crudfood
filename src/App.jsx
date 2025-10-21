import Footer from "./components/shared/Footer";
import MenuComponent from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";
import DetalleProducto from "./components/pages/DetalleProducto";
import LoginComponent from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router";
import Error404 from "./components/pages/Error404";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
function App() {
  return (
    <>
      <BrowserRouter>
        <MenuComponent></MenuComponent>
        <main>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>} />
            <Route
              path="/detalle"
              element={<DetalleProducto></DetalleProducto>}
            />
            <Route path="/login" element={<LoginComponent></LoginComponent>} />
            <Route
              path="/administrador"
              element={<Administrador></Administrador>}
            />
            <Route
              path="/administrador/crear"
              element={<FormularioProducto></FormularioProducto>}
            />
            <Route
              path="/administrador/editar"
              element={<FormularioProducto></FormularioProducto>}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default App;
