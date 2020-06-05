import React, { Component } from 'react';
import './PaginaCuatro.css';
import TableRow from '../TableRow/TableRow';
import FormOne from '../FormOne/FormOne';

class PaginaCuatro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 1
    };
  }

  selectedOption = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="container-actividad">
          <p>
            Ut mattis risus ac dolor dignissim mauris suscipit dignissim:{' '}
            <strong> dictum, ultrices, eget, fusce.</strong>
          </p>
          <div className="form-group row">
            <label for="inputEmpresa" className="col-sm-2 col-form-label">
              NOMBRE DE LA EMPRESA
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" />
            </div>
          </div>

          <div className="text-form">
            Evalúe de 1 a 4, donde 1 es
            <strong> nunca</strong> y 4 es <strong>siempre</strong>
          </div>
          <div>
            <table>
              <tr>
                <th></th>
                <th className="number-form">1</th>
                <th className="number-form">2</th>
                <th className="number-form">3</th>
                <th className="number-form">4</th>
              </tr>
              <FormOne ref="formOne" />
            </table>
          </div>
          <div onClick={() => console.log(this.refs.formOne.state)}>boton</div>
        </div>
      </div>
    );
  }
}

export default PaginaCuatro;
