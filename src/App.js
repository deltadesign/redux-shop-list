import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Add from './components/addItem';
import NavLinks from './components/navLinks';
import VisibleItems from './components/VisibleItems';


class App extends React.Component {

  render () {
  return (
     <> 
      <Container>

        <h1>Shopping List</h1>

        <Add />

        <NavLinks />

        <VisibleItems />

      </Container>
    </>
  );
}
}

export default App;
