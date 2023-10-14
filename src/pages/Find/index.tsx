import IntroTitle from '@/components/blocks/IntroTitle';
import { flx_col_center } from '@/style/display.css';
import { pd_t_9 } from '@/style/margin.css';
import Form from './Form';

const Find = () => {
  return (
    <div className={`${flx_col_center} ${pd_t_9}`}>
      <IntroTitle />
      <Form />
    </div>
  );
};

export default Find;
