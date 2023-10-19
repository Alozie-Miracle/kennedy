
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import LandingPage from './LandingPage';


function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <LandingPage />
    </HelmetProvider>
  )
}

export default App
