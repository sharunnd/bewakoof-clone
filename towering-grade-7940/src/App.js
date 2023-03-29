import logo from './logo.svg';
import './App.css';
import { Navbar } from './routes/Navbar';
import { AllRoutes } from './routes/AllRoutes';
import { Navbar2 } from './routes/Navbar2';
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <Box className="App">
      <Navbar />
      <Navbar2 />
      <AllRoutes />
    </Box>
  );
}

export default App;
