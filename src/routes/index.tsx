import '../assets/css/App.css';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from '../theme/theme';
import { Fragment, useState } from 'react';
/*import 'react-toastify/dist/ReactToastify.css';*/
import Landing from '@/layouts/landing';
import ErrorComponent from '../views/error';
import HomeSecundary from '@/views/landing/layoutwo';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    <Fragment>
      <ChakraProvider theme={currentTheme}>
        <HashRouter>
            <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
             <Route path="/home/*" element={< HomeSecundary />} />
              <Route path="/home/hometwoo/*" element={<Landing />} />
              <Route path="*" element={<ErrorComponent />} />
            </Routes>
        </HashRouter>
      </ChakraProvider>
    </Fragment>
  );
}