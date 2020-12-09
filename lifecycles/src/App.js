import './App.css';
import CounterClass from './Landon/CounterClass';
import { Container } from 'semantic-ui-react';
import Data from './Andrew/Data';
import DataFunc from './Andrew/DataFunc';

function App() {
  return (
    <>
    <Container>
    <CounterClass/>
    </Container>
    <Data />
    <DataFunc/>
    </>
  );
}

export default App;
