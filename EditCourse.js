import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import TutorLayout from './TutorLayout';

const EditCourse = ({ courseId, courseData, onSave }) => {
  const [editedData, setEditedData] = useState({
    name: '',
    description: '',
    // Add other fields as needed
  });

  // Set initial state when courseData changes
  useEffect(() => {
    if (courseData) {
      setEditedData(courseData);
    }
  }, [courseData]);

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(courseId, editedData);
  };

  return (
    <TutorLayout>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Course Name"
              variant="outlined"
              name="name"
              value={editedData.name || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              variant="outlined"
              name="description"
              value={editedData.description || ''}
              onChange={handleChange}
            />
          </Grid>
          {/* Add other input fields as needed */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
    </TutorLayout>
  );
}

export default EditCourse;
