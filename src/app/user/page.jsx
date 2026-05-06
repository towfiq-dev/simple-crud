import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../components/UserTable';

const UserPage = async() => {
  const data = await getUsers()
  return (
    <div>
      <h1>User Management: {data.length}</h1>
      <div className='flex justify-center gap-8 items-center'>
       
            <UserTable data={data}></UserTable>
            
      </div>
    </div>
  );
};

export default UserPage;