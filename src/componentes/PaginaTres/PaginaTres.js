import React from 'react';
import './PaginaTres.css';

function PaginaTres() {
  return (
    <div className="container pagina-tres">
      <div className="card">
        <img
          className="img-practica"
          src="https://firebasestorage.googleapis.com/v0/b/pruebas-f9b47.appspot.com/o/95214.png?alt=media&token=22b19245-15e6-48b9-90b0-3f11fe2364e3"
        />
        <div className="card-body">
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed in dapibus felis. Sed vehicula, enim nec
            facilisis lobortis, urna mauris sollicitudin orci, et rhoncus tellus
            enim et elit. Maecenas hendrerit pharetra neque vel maximus. Ut
            mattis risus ac dolor dignissim, quis placerat metus malesuada.
            Mauris suscipit dignissim eros,{' '}
            <strong> in dictum quam ultrices </strong>
            eget. Fusce non eleifend ante.
          </p>

          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed in dapibus felis. Sed vehicula, enim nec
            facilisis lobortis, urna mauris sollicitudin orci, et rhoncus tellus
            enim et elit. Maecenas hendrerit pharetra neque vel maximus. Ut
            mattis risus ac dolor dignissim, quis placerat metus malesuada.
            Mauris suscipit dignissim eros, in dictum quam ultrices eget. Fusce
            non eleifend ante.
          </p>
          <ul className="card-list">
            <li>
              Sed in dapibus felis. Sed vehicula, enim nec facilisis lobortis,
              urna mauris sollicitudin orci
            </li>
            <li>
              Sed in dapibus felis. Sed vehicula, enim nec facilisis lobortis,
              urna mauris sollicitudin orci
            </li>
          </ul>

          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaginaTres;
