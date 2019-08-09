import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Wrapper = styled.section`
  width: ${({ width }) => (width ? `${width}px` : '100vw')};
  height: ${({ height }) => (height ? `${height}px` : '100vh')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isAbsolute }) =>
    isAbsolute
      ? css`
          position: absolute;
        `
      : null};
`;

/* To use rotated Image in component */
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoadingImage = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  animation: ${rotate} 1.5s linear infinite;
`;

const Loading = ({ size, width, height, isAbsolute }) => {
  const imageSrc = '/static/loading.png';

  return (
    <Wrapper isAbsolute={isAbsolute} width={width} height={height}>
      <LoadingImage src={imageSrc} size={size} alt="loading-image" />
    </Wrapper>
  );
};

export default Loading;
