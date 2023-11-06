import { withAuth } from '@/components/hocs/withAuth';
import Header from '../../components/blocks/Header';
import ResultBox from '../../components/blocks/ResultBox';
import FormBox from './FormBox';

const Form = () => {
  return (
    <div>
      <Header />
      <ResultBox />

      <FormBox />
    </div>
  );
};

export default withAuth(Form);
