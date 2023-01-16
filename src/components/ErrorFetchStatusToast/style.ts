import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 1rem;
  bottom: 2rem;
  right: 2rem;
  max-width: 20rem;
  padding: 1rem 2rem;
  background: #b00020;
  border-radius: 12px;
`;

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 0.9rem;
`;

export const BackIconButton = styled(IconButton)`
  margin: 0;
  padding: 0;
`;
