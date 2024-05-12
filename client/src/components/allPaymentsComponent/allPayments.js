import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
};

const AllPayments = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await fetch('http://localhost:8800/PaymentManagementService/payment/getAllPayments');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setEnrollments(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>user ID</StyledTableCell>
            <StyledTableCell align="right">Course ID</StyledTableCell>
            <StyledTableCell align="right">Course Code</StyledTableCell>
            <StyledTableCell align="right">Payment Price</StyledTableCell>
            <StyledTableCell align="right">Payment Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enrollments.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.UserId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.CourseId}</StyledTableCell>
              <StyledTableCell align="right">{row.CourseCode}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(row.PaymentDate)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllPayments;
