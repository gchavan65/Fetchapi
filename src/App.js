import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num, updatenum] = useState();
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    const getdata = async () => {
      const result = await axios.get(`https://reqres.in/api/users?page=${num}`)
      setUserList(result.data.data);
      // console.log(result.data.data);
    }

    getdata()
  });

  return (



    <div className="container-fluid p-3">

      <div className='bg-dark'>
        <select value={num} onChange={(event) => {
          updatenum(event.target.value);
        }}>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select><h1 className='text-center text-light'>Page No:{num}</h1>
      </div>

      <table className="table table-sm mt-3">
        <thead className="thead-dark">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Images</th>
        </thead>
        <tbody>
          {userList.map((val, ind) => <tr key={ind}>
            <td>{val.first_name}</td>
            <td>{val.last_name}</td>
            <td>{val.email}</td>
            <td><img src={val.avatar} width="70" height="70" alt="No img" /></td>
          </tr>)}
        </tbody>
      </table>

    </div>
  );
}

export default App;


