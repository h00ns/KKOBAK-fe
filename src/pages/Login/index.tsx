import Form from './Form';
import IntroTitle from '@/components/blocks/IntroTitle';
import { pageLayout } from './index.css';

const Login = () => {
  return (
    <div className={pageLayout}>
      <IntroTitle />
      <Form />
    </div>
  );
};

export default Login;
