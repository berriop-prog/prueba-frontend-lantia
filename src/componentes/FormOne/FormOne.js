import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import './FormOne.css';

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: null,
      optionTwo: null,
      optionThree: null,
      optionFour: null,
      optionFive: null,
      optionSix: null,
    };
  }

  selectedOption = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <TableRow
          text="Planeación estrategica"
          selectedOption={(value) => this.selectedOption('optionOne', value)}
        />
        <TableRow
          text="Generación ideas"
          selectedOption={(value) => this.selectedOption('optionTwo', value)}
        />
        <TableRow
          text="Desarrollo producto"
          selectedOption={(value) => this.selectedOption('optionThree', value)}
        />
        <TableRow
          text="Nuevos marcadores"
          selectedOption={(value) => this.selectedOption('optionFour', value)}
        />
        <TableRow
          text="Busqueda de clientes"
          selectedOption={(value) => this.selectedOption('optionFive', value)}
        />
        <TableRow
          text="Adquisión"
          selectedOption={(value) => this.selectedOption('optionSix', value)}
        />
      </React.Fragment>
    );
  }
}

export default FormOne;
