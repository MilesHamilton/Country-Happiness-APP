import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryScoreTable = () => {
  const [data, setData] = useState([]);

  // console.log(data);

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
  // console.log(removeData())

  const renderBody = () => {
    return (
      data &&
      data.map((elm) => {
        return (
          <tr key={elm._id}>
            <td>{elm['Country or region']}</td>
            <td>{elm.Score}</td>
            <td className='operation'>
              <a class='btn-floating btn-tiny waves-effect waves-light red'>
                <i class='material-icons' onClick={() => removeData(elm._id)}>
                  remove
                </i>
              </a>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <table className='highlight'>
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
