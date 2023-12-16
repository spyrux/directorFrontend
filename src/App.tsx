import './App.css';
import Layout from '@/lib/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Routings from '@/lib/router/Routings';
import { AuthProvider } from './AuthProvider';

const App = () => (
  <AuthProvider>
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  </AuthProvider>
);

export default App;
