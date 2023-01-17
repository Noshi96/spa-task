import {
  Container,
  BackIconButton,
  Paragraph,
} from 'components/ErrorFetchStatusToast/style';
import { ErrorFetchStatusModel } from 'models/ErrorFetchStatusModel';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';

const ErrorFetchStatus = ({ statusCode, message }: ErrorFetchStatusModel) => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackIconButton
        size='large'
        aria-label='back to home'
        onClick={() => {
          navigate('/spa-task/');
          navigate(0);
        }}
      >
        <ArrowCircleLeftIcon sx={{ fontSize: '40px', color: '#1976d2' }} />
      </BackIconButton>
      <Paragraph>{`Status code: ${statusCode} - ${message}`}</Paragraph>
    </Container>
  );
};

export default ErrorFetchStatus;
