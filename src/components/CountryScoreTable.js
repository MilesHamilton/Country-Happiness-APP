import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryScoreTable = () => {
  const [data, setData] = useState([]);

  console.log(data)

  useEffect(async () => {
    const url = await axios('https://enigmatic-temple-08680.herokuapp.com/',
    )
    setData(url.data)
}, [])

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then(() => {
      const del = data.filter((data) => id !== data.id);
      setData(del);
    });
  };

  const renderBody = () => {
    console.log(data);
    return data && data.map(data => {
        console.log(data)
        return ( 
          <tr key={data.id}>
            <td>{data['Country or region']}</td>
            <td>{data.Score}</td>
            <td className='operation'>
              <button onClick={() => removeData(data.id)}>Delete</button>
            </td>
          </tr>
        );
      }
      )
  }


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
