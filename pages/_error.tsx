import Container from '../src/app/components/styled/container/index.styled';
import ErrorLog from '../src/app/components/widgety/error-log';
import { DEFAULT_ERROR } from '../src/app/constants/errors';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <ErrorLog error={DEFAULT_ERROR} />
    </Container>
  );
};

export default ErrorPage;
