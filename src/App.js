import React, { Component } from 'react';
import Header from './componentes/Header/Header';
import Menu from './componentes/Menu/Menu';
import PaginaUno from "./componentes/PaginaUno/PaginaUno";
import PaginaDos from "./componentes/PaginaDos/PaginaDos";
import PaginaTres  from "./componentes/PaginaTres/PaginaTres";
import PaginaCuatro  from "./componentes/PaginaCuatro/PaginaCuatro";
import Footer from './componentes/Footer/Footer';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
  }

  goToStart = () => {
    this.setState({ ...this.state, activePage: 1 });
  }
  
  goToEnd = () => {
    this.setState({ ...this.state, activePage: 4 });
  }

  goToNext = () => {
    if (this.state.activePage <= 4) {
      this.setState({ ...this.state, activePage: this.state.activePage + 1 });
    }
  }
  
  goToPrevious = () => {
    if (this.state.activePage >= 1) {
      this.setState({ ...this.state, activePage: this.state.activePage - 1 });
    }
  }

  contentToRender = (activePage) => {
    if (activePage === 1) {
      return (<PaginaUno />);
    } else if  (activePage === 2) {
      return (<PaginaDos />);
    } else if  (activePage === 3) {
      return (<PaginaTres />);
    } else if  (activePage === 4) {
      return (<PaginaCuatro />);
    }
    return null; 
  }

  render() {
    const { activePage } = this.state;
    const component = this.contentToRender(activePage);
    return (
      <div className="app">
        <Header />
        <Menu />
        {component} 
        <Footer goToStart={this.goToStart} goToEnd={this.goToEnd}
          goToNext={this.goToNext} goToPrevious={this.goToPrevious}
          current={activePage} />
      </div>
    );
  }
}

export default App;
