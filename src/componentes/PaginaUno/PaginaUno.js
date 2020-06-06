import React from 'react';
import './PaginaUno.css';

function PaginaUno() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body parrafo-card">
          <p>
            Vivamus in mauris vitae nunc pellentesque tincidunt et et massa.
            Aenean vitae elit et metus auctor lacinia. Suspendisse sollicitudin
            rhoncus nulla.Duis a volutpat tellus, eget imperdiet libero.
          </p>
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
          <p>Suspendisse id massa quis justo maximus rhoncus at in lacus.</p>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card carta-uno">
            <div className="card-body">
              <h4 className="card-title">Proin scelerisque quam</h4>
              <ul className="card-text">
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card carta-dos">
            <div className="card-body">
              <h4 className="card-title">Proin scelerisque quam</h4>
              <ul className="card-text">
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
                <li>Maecenas finibus risus ac dolor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="table-referencia">Tabla: Pd massa quis justo maximus rhoncus at in lacus finibus risus. Fuente: (AMRN,2018).</p>
      </div>
      </div>
  );
}

export default PaginaUno;
