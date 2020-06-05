import React from 'react';
import './PaginaDos.css';

function PaginaDos() {
  return (
    <div className="row pagina-dos">
      <div className="col-sm-6">
        <div className="card ">
          <div className="card-body card-dos">
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed in dapibus felis. Sed vehicula, enim
              nec facilisis lobortis, urna mauris sollicitudin orci, et rhoncus
              tellus enim et elit. Maecenas hendrerit pharetra neque vel
              maximus. Ut mattis risus ac dolor dignissim, quis placerat metus
              malesuada. Mauris suscipit dignissim eros,{' '}
              <strong>
                {' '}
                in dictum quam ultrices eget. Fusce non eleifend ante.
              </strong>
            </p>

            <p>
              Vivamus in mauris vitae nunc pellentesque tincidunt et et massa.
              Aenean vitae elit et metus auctor lacinia. Suspendisse
              sollicitudin rhoncus nulla.Duis a volutpat tellus, <strong>imperdiet </strong> y
              <strong> libero.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card img-dos">
          <div className="card-body">
            <img className="img-body" src="https://firebasestorage.googleapis.com/v0/b/pruebas-f9b47.appspot.com/o/Anotaci%C3%B3n%202020-06-04%20111242.png?alt=media&token=b07a6205-ff9c-4973-b158-caa9485a8880"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDos;
