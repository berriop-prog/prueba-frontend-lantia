import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import './FormThree.css';

class FormThree extends Component {
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
          text="Identifica áreas"
          selectedOption={(value) => this.selectedOption('optionOne', value)}
        />
        <TableRow
          text="Prioriza temáticas"
          selectedOption={(value) => this.selectedOption('optionTwo', value)}
        />
        <TableRow
          text="Clasifica fuentes"
          selectedOption={(value) => this.selectedOption('optionThree', value)}
        />
        <TableRow
          text="Llama expertos"
          selectedOption={(value) => this.selectedOption('optionFour', value)}
        />
        <TableRow
          text="Presenta resultados"
          selectedOption={(value) => this.selectedOption('optionFive', value)}
        />
        <TableRow
          text="Documenta aprendizajes"
          selectedOption={(value) => this.selectedOption('optionSix', value)}
        />
      </React.Fragment>
    );
  }
}

export default FormThree;
