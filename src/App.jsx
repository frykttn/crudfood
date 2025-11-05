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
    const productosLS = JSON.parse(localStorage.getItem('productosKey')) || []
const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
const [productos, setProductos] = useState(productosLS)

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  useEffect(()=>{
    localStorage.setItem('productosKey', JSON.stringify(productos))
  }, [productos])

  const crearProducto = (productoNuevo)=>{
    setProductos([...productos, productoNuevo ])
    return true
  }

  const borrarProducto = (idProducto)=>{
     const productosFiltrados = productos.filter((itemProducto)=> itemProducto.id !== idProducto)
     setProductos(productosFiltrados)
     return true
  }

  const editarProducto = (idProducto)=>{
    const productoBuscado = productos.find((itemProducto)=> itemProducto === idProducto)
    return productoBuscado
  }

  const modificarProducto = (idProducto, datosProducto)=>{
    const productosActualizados = productos.map((itemProducto)=>{
      if(itemProducto.id === idProducto){
         // actualizar el prodducto
         return {
          ...itemProducto,
          ...datosProducto
         }
      }
      return itemProducto
    })
    //actualizar el state
    setProductos(productosActualizados)
    return true
  }
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
                element={<Administrador setProductos={setProductos} productos={productos} borrarProducto={borrarProducto}></Administrador>}
              />
              <Route
                path="crear"
                element={<FormularioProducto titulo="Crear producto" crearProducto={crearProducto} ></FormularioProducto>}
              />
              <Route
                path="editar"
                element={<FormularioProducto titulo="Editar producto"></FormularioProducto>}
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
