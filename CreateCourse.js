import TutorLayout from './TutorLayout';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { CloudUpload } from '@mui/icons-material';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', content: '', type: '' });
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Assume only one file is uploaded (you can modify based on your needs)
    setUploadedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: newCourse.type === 'document' ? '.pdf,.doc,.docx' : 'video/*',
  });

  const handleAddCourse = () => {
    // Handle the file upload logic here
    // You can send the file to a backend server for storage and get a link to the stored file

    const updatedCourses = [...courses, { ...newCourse, file: uploadedFile }];
    setCourses(updatedCourses);

    // Clear input fields after adding the course
    setNewCourse({ title: '', content: '', type: '' });
    setUploadedFile(null);
  };

  return (
    <TutorLayout>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" gutterBottom>
          My Courses
        </Typography>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {courses.map((course, index) => (
            <Card key={index} style={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.content}
                </Typography>
                {course.file && (
                  <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
                    Uploaded File: {course.file.name}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', width: '400px' }}>
          <Typography variant="h5" gutterBottom>
            Add New Course
          </Typography>
          <TextField
            label="Course Title"
            fullWidth
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Course Content"
            multiline
            rows={4}
            fullWidth
            value={newCourse.content}
            onChange={(e) => setNewCourse({ ...newCourse, content: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Content Type"
            select
            fullWidth
            value={newCourse.type}
            onChange={(e) => setNewCourse({ ...newCourse, type: e.target.value })}
            style={{ marginBottom: '20px' }}
          >
            <option value="document">Document</option>
            <option value="text">Typed Text</option>
            <option value="video">Video</option>
          </TextField>
          {newCourse.type === 'document' || newCourse.type === 'video' ? (
            <div {...getRootProps()} style={{ marginBottom: '20px' }}>
              <input {...getInputProps()} />
              <CloudUpload fontSize="large" />
              <Typography variant="body2" color="text.secondary">
                {uploadedFile ? `Uploaded File: ${uploadedFile.name}` : 'Drag and drop a file here, or click to select one.'}
              </Typography>
            </div>
          ) : null}
          <Button variant="contained" color="primary" onClick={handleAddCourse} style={{ marginRight: '10px' }}>
            Add Course
          </Button>
          <Button variant="outlined" color="primary">
            Clear
          </Button>
        </Paper>
      </div>
    </TutorLayout>
  );
};

export default CoursePage;
