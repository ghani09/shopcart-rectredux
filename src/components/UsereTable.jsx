import React from 'react';
import { connect, useSelector } from 'react-redux';

const UsereTable = () => {
    let user = useSelector(state=> state.user.user)
   

    return(

      <div>
      <h1>  users data</h1>
      <table>
      <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Adress</th>
        </tr>
      </thead>
      <tbody>
          { user.map((userdata)=> 
          
            (<tr>
        <td> {userdata.id}</td>
        <td>{userdata.name}</td>
        <td>{userdata.username}</td>
        <td>{userdata.email}</td>
        <td>{userdata.address.street}</td>
        </tr>
            )
          )}
       
      </tbody>
        

      </table>
      
      </div>

    )
}



export default  connect(null , null)(UsereTable); 