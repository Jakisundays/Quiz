import { Box, Container } from '@mui/system';
import {Route, Routes } from 'react-router-dom'
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import '/Users/jacobdominguez/Documents/codiyapa/reduxtoolkit/src/App.css'
function App() {
  return (
    <Container maxWidth='sm'>
      <Box textAlign='center' mt={5} >
        <Routes>
          <Route index path='/Quiz' element={<Settings />} />
          <Route path='questions' element={<Questions />} />
          <Route path='score' element={<FinalScreen />} />
        </Routes>
      </Box>
    </Container>
    
  );
}

export default App;
