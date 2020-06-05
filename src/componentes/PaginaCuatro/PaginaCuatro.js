import React from 'react';
import './PaginaCuatro.css';

function PaginaCuatro() {
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
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>
                <input type="radio" name="row-1" data-col="1" />
              </td>
              <td>
                <input type="radio" name="row-1" data-col="2" />
              </td>
              <td>
                <input type="radio" name="row-1" data-col="3" />
              </td>
              <td>
                <input type="radio" name="row-1" data-col="4" />
              </td>
            </tr>
            <tr>
              <td>
                Praesent ac turpis et odio ultrices efficitur at sit amet nulla.
              </td>
              <td>
                <input type="radio" name="row-2" data-col="1" />
              </td>
              <td>
                <input type="radio" name="row-2" data-col="2" />
              </td>
              <td>
                <input type="radio" name="row-2" data-col="3" />
              </td>
              <td>
                <input type="radio" name="row-2" data-col="4" />
              </td>
            </tr>
            <tr>
              <td>
                Cras sit amet sem mollis, malesuada ante consequat, molestie
                ante.
              </td>
              <td>
                <input type="radio" name="row-3" data-col="1" />
              </td>
              <td>
                <input type="radio" name="row-3" data-col="2" />
              </td>
              <td>
                <input type="radio" name="row-3" data-col="3" />
              </td>
              <td>
                <input type="radio" name="row-3" data-col="4" />
              </td>
            </tr>

            <tr>
              <td>Etiam ultricies quam quis ex tincidunt ullamcorper.</td>
              <td>
                <input type="radio" name="row-4" data-col="1" />
              </td>
              <td>
                <input type="radio" name="row-4" data-col="2" />
              </td>
              <td>
                <input type="radio" name="row-4" data-col="3" />
              </td>
              <td>
                <input type="radio" name="row-4" data-col="4" />
              </td>
            </tr>
            <tr>
              <td>Nunc non turpis eu tortor dignissim gravida.</td>
              <td>
                <input type="radio" name="row-5" data-col="1" />
              </td>
              <td>
                <input type="radio" name="row-5" data-col="2" />
              </td>
              <td>
                <input type="radio" name="row-5" data-col="3" />
              </td>
              <td>
                <input type="radio" name="row-5" data-col="4" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaginaCuatro;
