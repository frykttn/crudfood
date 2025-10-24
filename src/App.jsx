import Footer from "./components/shared/Footer";
import MenuComponent from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";
import DetalleProducto from "./components/pages/DetalleProducto";
import LoginComponent from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router";
import Error404 from "./components/pages/Error404";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
function App() {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);
  return (
    <>
      <BrowserRouter>
        <MenuComponent
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></MenuComponent>
        <main className="container my-3">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>} />
            <Route
              path="/detalle"
              element={<DetalleProducto></DetalleProducto>}
            />
            <Route
              path="/login"
              element={
                <LoginComponent
                  setUsuarioLogueado={setUsuarioLogueado}
                ></LoginComponent>
              }
            />
            <Route
              path="/administrador"
              element={
                <ProtectorAdmin
                  usuarioLogueado={usuarioLogueado}
                ></ProtectorAdmin>
              }
            >
              <Route
                index
                element={<Administrador></Administrador>}
              />
              <Route
                path="crear"
                element={<FormularioProducto></FormularioProducto>}
              />
              <Route
                path="editar"
                element={<FormularioProducto></FormularioProducto>}
              />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default App;
