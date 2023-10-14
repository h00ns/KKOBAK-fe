import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { RESET, HOME, LOGIN, SIGN_UP } from '@/constants/routes/routes';
import Login from '@/pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Reset from './pages/Reset';

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={RESET} element={<Reset />} />
          <Route path={HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default App;
