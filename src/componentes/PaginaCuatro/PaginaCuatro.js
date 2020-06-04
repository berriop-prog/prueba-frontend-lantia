import React from 'react';
import './PaginaCuatro.css';

function PaginaCuatro() {
  return (
    <div className="container parrafo-inicial">
      <div className="card parrafo-grand">
        <div className="card-body parrafo-grand">
          <p>
            Vivamus in mauris vitae nunc pellentesque tincidunt et et massa.
            Aenean vitae elit et metus auctor lacinia. Suspendisse sollicitudin
            rhoncus nulla.Duis a volutpat tellus, eget imperdiet libero.
          </p>
          <p>Suspendisse id massa quis justo maximus rhoncus at in lacus.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card carta-uno">
            <div className="card-body">
              <h4 className="card-title">Proin scelerisque quam</h4>
              <ul className="card-text">
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
  );
}

export default PaginaCuatro;
