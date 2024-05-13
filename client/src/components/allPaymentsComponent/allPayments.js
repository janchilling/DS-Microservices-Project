import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

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
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    fetchPayments();
  }, []);


  const fetchPayments = async () => {
    try {
      const response = await fetch('http://localhost:8800/PaymentManagementService/payment/getAllPayments');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [studentData, setStudentData] = useState({});
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    // Fetch student and course data for each payment
    payments.forEach(async (payment) => {
      try {
        const studentResponse = await axios.get(`http://localhost:8800/UserManagementService/student/get/${payment.UserId}`);
        const courseResponse = await axios.get(`http://localhost:8800/CourseManagementService/course/getCourse/${payment.CourseId}`);
        setStudentData(prevState => ({ ...prevState, [payment.UserId]: studentResponse.data.student }));
        setCourseData(prevState => ({ ...prevState, [payment.CourseId]: courseResponse.data.course }));
      } catch (error) {
        console.error('Error fetching student or course data:', error);
      }
    });
  }, [payments]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">Course Name</StyledTableCell>
            <StyledTableCell align="right">Payment Price</StyledTableCell>
            <StyledTableCell align="right">Payment Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => (
            <StyledTableRow key={payment._id}>
              <StyledTableCell component="th" scope="row">
                {studentData[payment.userId] ? studentData[payment.UserId].Fullname : 'Loading...'}
              </StyledTableCell>
              <StyledTableCell align="right">
                {courseData[payment.courseId] ? courseData[payment.CourseId].CourseName : 'Loading...'}
              </StyledTableCell>
              <StyledTableCell align="right">{payment.Price}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(payment.PaymentDate)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllPayments;
