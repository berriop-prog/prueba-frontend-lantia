import React, { Component } from 'react';
import FormOne from '../FormOne/FormOne';
import FormTwo from '../FormTwo/FormTwo';
import FormThree from '../FormThree/FormThree';
import FormFour from '../FormFour/FormFour';
import './PaginaCuatro.css';
class PaginaCuatro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 1,
    };
  }

  selectedOption = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  promedio() {
    let value = [
      { OptionOne: 1 },
      { OptionOne: 2 },
      { OptionOne: 3 },
      { OptionOne: 4 },
    ];
    let total = 0;
    value.forEach((element) => {
      total += element.OptionOne;
    });
    value.forEach((element) => {
      console.log((element.OptionOne * 100) / total);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
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
                <thead>
                  <tr>
                    <th></th>
                    <th className="number-form">1</th>
                    <th className="number-form">2</th>
                    <th className="number-form">3</th>
                    <th className="number-form">4</th>
                  </tr>
                </thead>
                <tbody>
                  <FormOne ref="formOne" />
                  <FormTwo ref="formTwo" />
                  <FormThree ref="formThree" />
                  <FormFour ref="formFour" />
                </tbody>
              </table>
            </div>

            <div onClick={() => console.log(this.refs.formOne.state)}>
              boton 1
            </div>
            <div onClick={() => console.log(this.refs.formTwo.state)}>
              boton 2
            </div>
            <div onClick={() => console.log(this.refs.formThree.state)}>
              boton 3
            </div>
            <div onClick={() => console.log(this.refs.formFour.state)}>
              boton 4
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginaCuatro;
