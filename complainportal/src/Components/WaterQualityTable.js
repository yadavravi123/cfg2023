import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './WaterQualityTable.css';
function createData(schemeId, date, chlorineLevel) {
  return {schemeId, date, chlorineLevel };
}

const rowsPerPage = 5; // Number of rows to display per page

const rows = [
  createData( 'Scheme ID 1', '2023-07-16', ''),
  createData('Scheme ID 2', '2023-07-17', ''),
  createData( 'Scheme ID 3', '2023-07-18', ''),
  createData( 'Scheme ID 4', '2023-07-19', ''),
  createData('Scheme ID 5', '2023-07-20', ''),
  createData( 'Scheme ID 6', '2023-07-21', ''),
  // Add more rows as needed
];

export default function WaterQualityTable() {
  const [page, setPage] = useState(0); // Current page index

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const displayRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="water quality table">
        <TableHead>
          <TableRow className='ComplaintTable'>

            <TableCell>Scheme ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Chlorine Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayRows.map((row, index) => (
            <TableRow key={index}>
              
              <TableCell>{row.schemeId}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Select
                  value={row.chlorinated}
                  onChange={(event) =>
                    console.log(
                      `Selected chlorinated ${event.target.value} for row ${index}`
                    )
                  }
                >
                  <MenuItem value="yes">yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                 
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        Page:{' '}
        {page + 1} of {Math.ceil(rows.length / rowsPerPage)}
      </div>
      <div>
        <button
          onClick={(event) =>
            handleChangePage(event, page - 1 >= 0 ? page - 1 : 0)
          }
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={(event) =>
            handleChangePage(
              event,
              page + 1 < Math.ceil(rows.length / rowsPerPage)
                ? page + 1
                : page
            )
          }
          disabled={page + 1 >= Math.ceil(rows.length / rowsPerPage)}
        >
          Next
        </button>
      </div>
    </TableContainer>
  );
}
