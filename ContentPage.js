import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../utils/data';
import { InsertDriveFile, GetApp } from '@mui/icons-material';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import 'animate.css/animate.min.css';
import Navbar from './Navbar';

const ContentWrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  animation: 'fadeIn 1s ease-in-out',
  background: '#f9f9f9', // Light gray background
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const VideoContainer = styled('div')({
  marginTop: '20px',
  height: '0',
  position: 'relative',
  width: '65%',
  paddingBottom: '40%', // 4:3 aspect ratio for responsive video
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const ResponsiveVideo = styled('iframe')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});

const DocumentLinks = styled('div')({
  marginTop: '30px',
  textAlign: 'center',
  animation: 'animate__animated animate__slideInUp animate__slower',
});

const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333', // Dark gray text
  marginBottom: '10px',
});

const Subtitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#FFF', // white text
  marginBottom: '10px',
});

const LinkButton = styled(Button)({
  margin: '10px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'none', // Avoid uppercase text
  borderRadius: '8px',
  padding: '8px 16px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  position: 'relative',
  overflow: 'hidden',
  color: '#fff', // Text color
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Two-color gradient
  '&:hover': {
    background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)', // Hover gradient
  },
});

const ContentPage = () => {
  const { courseId, contentId } = useParams();

  const selectedCourse = courses.find((course) => course.id === courseId);
  const selectedContent = selectedCourse
    ? selectedCourse.content.find((content) => content.id === contentId)
    : null;

  if (!selectedCourse || !selectedContent) {
    return <div>Course or content not found</div>;
  }

  return (
    <>
    <Navbar/>
    <ContentWrapper>
      <Title variant="h4">
        {selectedCourse.title}
      </Title>
      <Subtitle variant="h5">
        {selectedContent.title}
      </Subtitle>

      {selectedContent.videoUrl && (
        <VideoContainer>
          <ResponsiveVideo
            src={`https://www.youtube.com/embed/${selectedContent.videoUrl}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </VideoContainer>
      )}

      {selectedContent.documentUrl && (
        <DocumentLinks>
          <Subtitle variant="h6">
            Document Links:
          </Subtitle>
          <LinkButton
            href={process.env.PUBLIC_URL + selectedContent.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<InsertDriveFile />}
          >
            View Document
          </LinkButton>
          <LinkButton
            href={process.env.PUBLIC_URL + selectedContent.documentUrl}
            download
            endIcon={<GetApp />}
          >
            Download Document
          </LinkButton>
        </DocumentLinks>
      )}
    </ContentWrapper>
    </>
  );
};

export default ContentPage;
