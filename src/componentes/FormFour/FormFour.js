import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import './FormFour.css';

class FormFour extends Component {
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
          text="Dedicación de tiempo"
          selectedOption={(value) => this.selectedOption('optionOne', value)}
        />
        <TableRow
          text="Compra de estudios"
          selectedOption={(value) => this.selectedOption('optionTwo', value)}
        />
        <TableRow
          text="Un lider que promueve"
          selectedOption={(value) => this.selectedOption('optionThree', value)}
        />
        <TableRow
          text="Espacios de presentación"
          selectedOption={(value) => this.selectedOption('optionFour', value)}
        />
        <TableRow
          text="Planeación estrategica"
          selectedOption={(value) => this.selectedOption('optionFive', value)}
        />
        <TableRow
          text="Adquisión de tecnologías"
          selectedOption={(value) => this.selectedOption('optionSix', value)}
        />
      </React.Fragment>
    );
  }
}

export default FormFour;
