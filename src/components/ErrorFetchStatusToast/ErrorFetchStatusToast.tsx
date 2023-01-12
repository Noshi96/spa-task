import { Container, Paragraph } from 'components/ErrorFetchStatusToast/style';
import { ErrorFetchStatusModel } from 'models/ErrorFetchStatusModel';

const ErrorFetchStatus = ({ statusCode, message }: ErrorFetchStatusModel) => {
  return (
    <Container>
      <Paragraph>{`Status code: ${statusCode} - ${message}`}</Paragraph>
    </Container>
  );
};

export default ErrorFetchStatus;
