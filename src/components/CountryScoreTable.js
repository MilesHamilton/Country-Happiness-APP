import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/countryScoreTable.css';

const CountryScoreTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios('https://enigmatic-temple-08680.herokuapp.com/');
      setData(res.data);
    };
    fetch();
  }, []);

  const removeData = (id) => {
    const url = `https://enigmatic-temple-08680.herokuapp.com/${id}`;
    axios
      .delete(url)
      .then(() => {
        const del = data.filter((elm) => id !== elm._id);
        setData(del);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderBody = () => {
    return (
      data &&
      data.map((elm) => {
        return (
          <div id='table'>
            <table className='wrapper responsive-table'>
              <tr key={elm._id} className='id responsive-table'>
                <td className='country-name'>{elm['Country or region']}</td>
                <td className='center-align country-score'>{elm.Score}</td>
                <a className='btn-flat'>
                  <i
                    className='material-icons'
                    onClick={() => removeData(elm._id)}
                  >
                    remove
                  </i>
                </a>
              </tr>
            </table>
          </div>
        );
      })
    );
  };

  return (
    <>
      <table className='striped responsive'>
        <thead>
          <tr>
            <th>Full Rankings</th>
          </tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default CountryScoreTable;
