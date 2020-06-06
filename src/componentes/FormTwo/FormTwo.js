import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import './FormTwo.css';

class FormTwo extends Component {
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
          text="Buscadores patentes"
          selectedOption={(value) => this.selectedOption('optionOne', value)}
        />
        <TableRow
          text="Entrevista a expertos"
          selectedOption={(value) => this.selectedOption('optionTwo', value)}
        />
        <TableRow
          text="Bases de datos"
          selectedOption={(value) => this.selectedOption('optionThree', value)}
        />
        <TableRow
          text="Visualización de datos"
          selectedOption={(value) => this.selectedOption('optionFour', value)}
        />
        <TableRow
          text="Mineria de datos"
          selectedOption={(value) => this.selectedOption('optionFive', value)}
        />
        <TableRow
          text="Planeación estrategica"
          selectedOption={(value) => this.selectedOption('optionSix', value)}
        />
      </React.Fragment>
    );
  }
}

export default FormTwo;
