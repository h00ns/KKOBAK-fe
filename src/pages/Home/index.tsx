import Header from '@/components/layouts/Header';
import Calendar from './Calendar';
import ResultBox from './ResultBox';
import { withAuth } from '@/components/hocs/withAuth';

const Home = () => {
  return (
    <div>
      <Header />
      <ResultBox />
      <Calendar />
    </div>
  );
};

export default withAuth(Home);
