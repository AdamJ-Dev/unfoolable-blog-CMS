import Container from '../src/app/components/styled/container/index.styled';
import ErrorLog from '../src/app/components/widgety/error-log';
import { DEFAULT_404 } from '../src/app/constants/errors';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <ErrorLog error={DEFAULT_404} />
    </Container>
  );
};

export default NotFoundPage;
