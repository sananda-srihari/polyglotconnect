import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TutorLayout from "./TutorLayout";

const ViewDetails = () => {
  return (
    <TutorLayout>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" align="center" color="primary" mb={3}>
            All Courses
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#D9D9D9",
              borderRadius: "10px",
              padding: "20px",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" mb={2}>
              <strong>Learn Tamil</strong>
              <br />
              by Avinash
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "300px",
                background: "#D9D9D9",
                marginTop: "40px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                
              }}
            >
              <Typography variant="h6" mb={2} color="primary">
                Course, Teacher details
              </Typography>

              <Typography variant="body1" mb={2} textAlign="center">
                Request teacher to schedule classes:
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "10px",
                }}
              >
                <Button variant="contained" color="primary">
                  Online
                </Button>
                <Button variant="contained" color="primary">
                  In-Person
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button variant="outlined" color="primary">
                    Group
                  </Button>
                  <Button variant="outlined" color="primary">
                    Individual
                  </Button>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button variant="outlined" color="primary">
                    Group
                  </Button>
                  <Button variant="outlined" color="primary">
                    Individual
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </TutorLayout>
  );
};

export default ViewDetails;
