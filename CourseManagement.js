// CourseManagement.js
import React, { useState } from 'react';
import courses from '../utils/data';
import AdminLayout from './AdminLayout';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  TextField,
} from '@mui/material';
const CourseManagement = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedCourse(null);
  };

  const handleEditSubmit = () => {
    // Add your logic to update the course data
    // For simplicity, let's just log the updated course
    console.log('Updated Course:', selectedCourse);
    handleEditModalClose();
  };

  const handleDeleteClick = (courseId) => {
    // Add your logic to delete the course with the given ID
    // For simplicity, let's just log the course ID to be deleted
    console.log('Deleted Course ID:', courseId);
  };

  return (
    <>
    <AdminLayout>
    <div style={{ marginLeft:'150px' , marginTop:'0px',marginRight:'100px' }}>
      <TableContainer component={Paper}>
      <h2 style={{marginBottom:'20px'}}>Course Managment</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.course_name}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClick(course)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteClick(course.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Course Modal */}
      <Modal open={editModalOpen} onClose={handleEditModalClose}>
        <div>
          <TextField
            label="Course Name"
            variant="outlined"
            fullWidth
            value={selectedCourse?.course_name || ''}
            onChange={(e) =>
              setSelectedCourse((prevCourse) => ({
                ...prevCourse,
                course_name: e.target.value,
              }))
            }
          />
          <Button variant="contained" color="primary" onClick={handleEditSubmit}
          >
            Save Changes
          </Button>
        </div>
      </Modal>
    </div>
    </AdminLayout>
    </>
  );
};

export default CourseManagement;
