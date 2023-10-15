import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { RESET, HOME, LOGIN, SIGN_UP, KAKAO } from '@/constants/routes/routes';
import Login from '@/pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Reset from './pages/Reset';
import Kakao from './pages/Kakao';

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={RESET} element={<Reset />} />
          <Route path={HOME} element={<Home />} />
          <Route path={KAKAO} element={<Kakao />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default App;
