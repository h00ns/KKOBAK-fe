import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { FIND, HOME, LOGIN, SIGN_UP } from '@/constants/routes/routes';
import Login from '@/pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Find from './pages/Find';

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={FIND} element={<Find />} />
          <Route path={HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default App;
