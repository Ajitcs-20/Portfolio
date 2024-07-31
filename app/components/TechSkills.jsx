"use client"
import React from 'react';
import styled from 'styled-components';

const IconBox = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }

  &:hover .hover-text {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const HoverText = styled.div`
  position: absolute;
  bottom: 0%;
  top: 0%;
  left: 0%;
  right: 0%;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px); 
  padding: 40px 15px; 
  border-radius: 8px; 
  text-align: center; 
  color: white;
  font-size: 14px; 
  font-weight: bold; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add a subtle shadow for depth */
`;

const TechSkills = ({ iconImages }) => {
  return (
    <div>
       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Technical Skills
      </h2>
    <IconContainer className="bg-gradient-to-r from-white to-sky-400 rounded-md">
      {iconImages.map((image, index) => (
        <IconBox className=' hover:scale-110' key={index}>
          <img src={image.src} alt={`Icon ${index + 1}`} />
         
          <HoverText className="hover-text">
          <span >{image.text} 
          </span>
          </HoverText>
        </IconBox>
      ))}
    </IconContainer>
    </div>
  );
};

export default TechSkills;
