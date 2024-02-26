import React, { useState } from 'react';
import TutorLayout from './TutorLayout';

import {
  Button,
  TextField,
  TextareaAutosize,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Container
} from '@mui/material';
import './CreateQuizPage.css';

const CreateQuizPage = () => {
  const [options, setOptions] = useState(['']); // State to manage options

  const handleCreateQuiz = () => {
    // Add logic to handle quiz creation
    // For now, let's just log the quiz details
    console.log('Quiz created!');
    console.log('Title:', document.getElementById('quizTitle').value);
    console.log('Description:', document.getElementById('quizDescription').value);
    console.log('Level:', document.getElementById('quizLevel').value);
    console.log('Questions:', document.getElementById('quizQuestion').value);
    console.log('Options:', options);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <TutorLayout>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
          }}
        >
          <div className="quiz-container" style={{ width: '100%', maxWidth: '500px' }}>
            <h2>Create Quiz</h2>
            <form>
              <TextField
                id="quizTitle"
                label="Quiz Title"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{ marginBottom: '10px' }}
              />

              <TextareaAutosize
                id="quizDescription"
                aria-label="Quiz Description"
                placeholder="Quiz Description"
                minRows={4}
                style={{ width: '100%', marginTop: '10px' }}
                required
              />

              <FormControl fullWidth variant="outlined" margin="normal" required>
                <InputLabel id="quizLevelLabel">Select Level</InputLabel>
                <Select
                  labelId="quizLevelLabel"
                  id="quizLevel"
                  label="Select Level"
                  sx={{ marginBottom: '10px' }}
                >
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="hard">Hard</MenuItem>
                </Select>
              </FormControl>

              <div className="question">
                <TextField
                  id="quizQuestion"
                  label="Question"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ marginBottom: '5px' }}
                />

                {options.map((option, index) => (
                  <div key={index}>
                    <TextField
                      type="text"
                      value={option}
                      label={`Option ${index + 1}`}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      sx={{ marginBottom: '5px' }}
                      required
                      onChange={(e) => updateOption(index, e.target.value)}
                    />
                  </div>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={addOption}
                  style={{ marginTop: '10px' }}
                >
                  Add Option
                </Button>
              </div>

              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateQuiz}
                style={{ marginTop: '20px' }}
              >
                Create Quiz
              </Button>
            </form>
          </div>
        </Box>
      </Container>
    </TutorLayout>
  );
};

export default CreateQuizPage;
