import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { RESET, HOME, LOGIN, SIGN_UP, KAKAO, FORM } from '@/constants/routes/routes';
import Login from '@/pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Reset from './pages/Reset';
import Kakao from './pages/Kakao';
import Form from './pages/Form';

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={KAKAO} element={<Kakao />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={RESET} element={<Reset />} />
          <Route path={HOME} element={<Home />} />
          <Route path={FORM} element={<Form />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default App;
