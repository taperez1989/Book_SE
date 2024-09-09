import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import { Navbar } from 'react-bootstrap';
import AppNavbar from './components/Navbar';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <AppNavbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
