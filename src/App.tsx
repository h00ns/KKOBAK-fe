import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { LOGIN } from '@/constants/routes/routes';
import Login from '@/pages/Login';

function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  );
}

export default App;
