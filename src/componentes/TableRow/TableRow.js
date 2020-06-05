import React from 'react';
import './TableRow.css';

function TableRow(props) {
  function setSelectedOption(option) {
    props.selectedOption(option);
  }

  return (
    <tr>
      <td>{props.text}</td>
      <td>
        <input
          type="radio"
          onClick={() => setSelectedOption(1)}
        />
      </td>
      <td>
        <input
          type="radio"
          onClick={() => setSelectedOption(2)}
        />
      </td>
      <td>
        <input
          type="radio"
          onClick={() => setSelectedOption(3)}
        />
      </td>
      <td>
        <input
          type="radio"
          onClick={() => setSelectedOption(4)}
        />
      </td>
    </tr>
  );
}

export default TableRow;
