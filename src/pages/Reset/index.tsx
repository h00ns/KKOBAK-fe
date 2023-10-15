import IntroTitle from '@/components/blocks/IntroTitle';
import Form from './Form';
import { pageLayout } from './index.css';

const Reset = () => {
  return (
    <div className={pageLayout}>
      <IntroTitle />
      <Form />
    </div>
  );
};

export default Reset;
