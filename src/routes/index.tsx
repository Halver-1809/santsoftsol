import '../assets/css/App.css';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/auth';
import Dashboard from '../layouts/custom';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from '../theme/theme';
import { Fragment, useState } from 'react';
import { AuthProvider } from '@/hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './routeProtect';
import Landing from '@/layouts/landing';
import ErrorComponent from '../views/error';
import HomeTwo from '@/views/landing/page-two';
import HomeSecundary from '@/views/landing/layoutwo';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    <Fragment>
      <ChakraProvider theme={currentTheme}>
        <HashRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route
                path="pages/*"
                element={
                  <ProtectedRoute>
                    <Dashboard theme={currentTheme} setTheme={setCurrentTheme} />
                  </ProtectedRoute>
                }
              />
              <Route path="/auth/*" element={<AuthLayout />} />
              <Route path="/auth" element={<Navigate to="/auth/sign-in" replace />} />
              <Route path="/home/*" element={< HomeSecundary />} />
              <Route path="/home/hometwoo/*" element={<Landing />} />
              <Route path="*" element={<ErrorComponent />} />
            </Routes>
          </AuthProvider>
        </HashRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          closeButton
        />
      </ChakraProvider>
    </Fragment>
  );
}
