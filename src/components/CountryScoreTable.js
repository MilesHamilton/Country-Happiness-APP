import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryScoreTable = () => {
  const [data, setdata] = useState([]);

  const getData = () => {
    axios.get('https://enigmatic-temple-08680.herokuapp.com/').then((res) => {
      data(res.data);
    });
  };

  const useEffect =
    (() => {
      getData();
    },
    []);

  const renderBody = () => {
    return (
      data &&
      data.map(({ country, Score }) => {
        return (
          <tr key>
            <td>{country['Country or region']}</td>
            <td>{Score}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <table className='highlight'>
        <thead>
          <tr>
            <th>Full Rankings</th>
          </tr>
        </thead>

        <tbody>{/* <tr>{this.props['Country or region']}</tr> */}</tbody>
      </table>
    </div>
  );
};

export default CountryScoreTable;
