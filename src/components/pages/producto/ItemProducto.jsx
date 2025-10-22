import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemProducto = () => {
    return (
        <tr>
      <td className="text-center"></td>
      <td></td>
      <td className="text-end">$</td>
      <td className="text-center">
        <img
          src={{}}
          className="img-thumbnail"
          alt={{}}
        ></img>
      </td>
      <td></td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={`/administrador/editar/${itemProducto.id}`}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemProducto;