import Header from '@/components/blocks/Header';
import ResultBox from '@/components/blocks/ResultBox';
import { withAuth } from '@/components/hocs/withAuth';

const Statistics = () => {
  return (
    <div>
      <Header pageType="statistics" />
      <ResultBox />
    </div>
  );
};

export default withAuth(Statistics);
