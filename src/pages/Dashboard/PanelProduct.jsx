import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Products from "../Home/Products";
import SingleProduct from "../../components/Single Product";
import http from "../../services/http.service";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0), createData("Ice cream sandwich", 237, 9.0, 37, 4.3), createData("Eclair", 262, 16.0, 24, 6.0), createData("Cupcake", 305, 3.7, 67, 4.3), createData("Gingerbread", 356, 16.0, 49, 3.9)];

export default function BasicTable() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await http.get("/products").then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">تصویر</TableCell>
            <TableCell>نام کالا</TableCell>
            <TableCell align="right">قیمت </TableCell>
            <TableCell align="right">موجودی</TableCell>
            <TableCell align="right">عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.title} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="right">
                {" "}
                <img src={item.thumbnail} height="60px" width="60px" alt={item.title} />
              </TableCell>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right"> {item.stock}</TableCell>
              <Button variant="outlined">edit</Button>
              <Button variant="outlined">delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
