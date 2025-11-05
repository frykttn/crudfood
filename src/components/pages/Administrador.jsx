import { Button, Table } from "react-bootstrap";
import { Link } from "react-router";
import ItemProducto from "./producto/ItemProducto.jsx"
import productosPrueba from "./../data/productoprueba.js";




const Administrador = ({setProductos, productos, borrarProducto}) => {

  const cargarroductosPrueba =()=>{
    setProductos(productosPrueba)
  }
    return (
       <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary me-2" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button
            variant="info"
            className="text-light"
            onClick={cargarroductosPrueba}>
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((itemProducto, indice)=>
              <ItemProducto itemProducto={itemProducto} key={itemProducto.id} borrarProducto={borrarProducto} fila={indice+1}></ItemProducto>
            )
          }
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;