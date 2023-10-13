import { flx_col_center } from '@/style/display.css';
import IntroTitle from '@/components/blocks/IntroTitle';
import { pd_t_9 } from '@/style/margin.css';
import Form from './Form';

const SignUp = () => {
  return (
    <div className={`${flx_col_center} ${pd_t_9}`}>
      <IntroTitle />
      <Form />
    </div>
  );
};

export default SignUp;
