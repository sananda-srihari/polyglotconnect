// // FeedbackForm.js
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(feedback);
    setFeedback('');
  };

  return (
    <>
    <div>
        
      <Typography variant="h5" gutterBottom style={{ fontWeight: 780, marginBottom: '16px',marginTop:'32px', color: 'black' }}>
        Provide Feedback
      </Typography>
      <TextField
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        label="Feedback"
        value={feedback}
        onChange={handleInputChange}
        style={{ marginBottom: '16px' }}
      />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          marginTop: '32px',
          backgroundColor: '#aa00ff', // Light pink color
          color: '#fff', // White text
          '&:hover': {
            backgroundColor: '#d500f9', // Lighter pink color on hover
          },
          fontSize: '12px',  // Adjust the font size as needed
          margin: 'auto', 
          alignSelf: 'center',
        }}
      >
        Submit Feedback
      </Button >
      <br></br>
    </div>
    </>
  );
};

export default FeedbackForm;
// import React from 'react';

// const FeedbackForm = ({ onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
//         Your Name:
//         <input style={{ padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" name="name" required />
//       </label>
//       <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
//         Your Feedback:
//         <textarea style={{ padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }} name="feedback" rows="4" required />
//       </label>
//       <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Submit Feedback</button>
//     </form>
//   );
// };

// export default FeedbackForm;
