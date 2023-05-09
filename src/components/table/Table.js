import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";
import {useEffect, useState} from "react";

const TableList = () => {

  // const [books, setBooks] = useState([]);
  // const booksCollectionRef = collection(db, "books");
  //
  // useEffect( () => {
  //
  //   const getBooks = async () => {
  //     const data = await getDocs(booksCollectionRef);
  //     setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }
  //
  //   getBooks()
  //
  // }, [])

  const rows = [
    {
      id: 1,
      product: "Keyboard",
      date: "20 March",
      customer: "John Smith",
      amount: 29.99,
      method: "Credit Card",
      status: "Paid"
    },
    {
      id: 2,
      product: "Mouse",
      date: "2 April",
      customer: "Jane Doe",
      amount: 14.99,
      method: "PayPal",
      status: "Paid"
    },
    {
      id: 3,
      product: "Headphones",
      date: "4 May",
      customer: "David Johnson",
      amount: 49.99,
      method: "Credit Card",
      status: "Paid"
    },
    {
      id: 4,
      product: "Monitor",
      date: "25 April",
      customer: "Sarah Williams",
      amount: 199.99,
      method: "Credit Card",
      status: "Paid"
    },
    {
      id: 5,
      product: "External Hard Drive",
      date: "7 February",
      customer: "Michael Brown",
      amount: 79.99,
      method: "PayPal",
      status: "Paid"
    }
  ]

  return (
      <TableContainer component={Paper} className={"table"}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={"tableCell"}>Tracking ID</TableCell>
              <TableCell className={"tableCell"}>Product</TableCell>
              <TableCell className={"tableCell"}>Date</TableCell>
              <TableCell className={"tableCell"}>Customer</TableCell>
              <TableCell className={"tableCell"}>Amount</TableCell>
              <TableCell className={"tableCell"}>Payment Method</TableCell>
              <TableCell className={"tableCell"}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                  {/*<TableCell className={"tableCell"}>{row.name}</TableCell>*/}
                  {/*<TableCell className={"tableCell"}>{row.author}</TableCell>*/}
                  {/*<TableCell className={"tableCell"}>{row.stock}</TableCell>*/}
                  <TableCell className={"tableCell"}>{row.id}</TableCell>
                  <TableCell className={"tableCell"}>{row.product}</TableCell>
                  <TableCell className={"tableCell"}>{row.date}</TableCell>
                  <TableCell className={"tableCell"}>{row.customer}</TableCell>
                  <TableCell className={"tableCell"}>{row.amount}</TableCell>
                  <TableCell className={"tableCell"}>{row.method}</TableCell>
                  <TableCell className={"tableCell"}>{row.status}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableList