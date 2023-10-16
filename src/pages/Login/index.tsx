import Form from './Form';
import IntroTitle from '@/components/blocks/IntroTitle';
import { pageLayout } from './index.css';
import { withUnAuth } from '@/components/hocs/withUnAuth';

const Login = () => {
  return (
    <div className={pageLayout}>
      <IntroTitle />
      <Form />
    </div>
  );
};

export default withUnAuth(Login);
