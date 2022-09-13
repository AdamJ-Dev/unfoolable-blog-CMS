import Container from '../src/app/components/styled/container/index.styled';
import ErrorLog from '../src/app/components/widgety/error-log';
import { DEFAULT_500 } from '../src/app/constants/errors';

const ServerErrorPage: React.FC = () => {
  return (
    <Container>
      <ErrorLog error={DEFAULT_500} />
    </Container>
  );
};

export default ServerErrorPage;
