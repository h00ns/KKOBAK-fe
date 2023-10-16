import IntroTitle from '@/components/blocks/IntroTitle';
import Form from './Form';
import { pageLayout } from './index.css';
import { withUnAuth } from '@/components/hocs/withUnAuth';

const SignUp = () => {
  return (
    <div className={pageLayout}>
      <IntroTitle />
      <Form />
    </div>
  );
};

export default withUnAuth(SignUp);
