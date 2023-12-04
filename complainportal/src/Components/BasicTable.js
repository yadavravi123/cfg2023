import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./BasicTable.css";

function createData(name, calories, fat, date, assigned, status) {
  return { name, calories, fat, date, assigned, status };
}

/*
name: 
  description: 
  address:
  date: 
  assigned: 

  status:

*/

const rows = [
  createData("vandana", 159, 24, new Date(2023, 6, 6), "", ""),
  createData("Ramesh", 237, 37, new Date(2023, 6, 14), "", ""),
  createData("Priyanka", 262, 24, new Date(2023, 6, 14), "", ""),
  createData("Suresh", 305, 67, new Date(2023, 6, 14), "", ""),
  createData("Payal", 356, 49, new Date(2023, 6, 14), "", ""),
  createData("Anushka", 356, 49, new Date(2023, 11, 11), "", ""),
];

export default function BasicTable() {
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    //get all complaints
    const getComplaints = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/complaint/getallcomplaints",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        const json = await response.json();
        setComplaints(json);
        // alert("Successfully registered");
      } catch (error) {
        console.log(error);
      }
    };
    getComplaints();
  }, [complaints]);

  const [selectedAssigned, setSelectedAssigned] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleAssignedChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].assigned = event.target.value;
    setSelectedAssigned(event.target.value);
    // You can perform additional actions or update the state as needed
  };

  const handleStatusChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].status = event.target.value;
    setSelectedStatus(event.target.value);
    // You can perform additional actions or update the state as needed
  };

  const isRowExpired = (date, status) => {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return status === "open" && date < sevenDaysAgo;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="ComplaintTable">
            <TableCell>Complaint ID</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Assigned</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complaints.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: isRowExpired(row.date, row.status)
                  ? "red"
                  : "inherit",
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <Select
                  value={row.assigned}
                  onChange={(event) => handleAssignedChange(event, index)}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="District">Quality checking Members</MenuItem>
                  <MenuItem value="gram-panchayat">Gram Panchayat</MenuItem>
                </Select>
              </TableCell>
              <TableCell align="right">
                <Select
                  value={row.status}
                  onChange={(event) => handleStatusChange(event, index)}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="forwarded">Forwarded</MenuItem>
                  <MenuItem value="resolved">Resolved</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
