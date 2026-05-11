import AddUserModal from '@/components/AddUserModal';
import UserTable from '@/components/UserTable';
import React from 'react';
const getUser = async()=>{
  const res = await fetch('http://localhost:5000/users')
  const data = await res.json()
  return data
}
const UserPage = async() => {
  const users = await getUser()
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold'>User ManageMent:{users.length}</h1>
      <div className='flex justify-center my-10'>
        <AddUserModal/>
      </div>
      <div className='flex justify-center gap-8 items-center'>
        <UserTable users={users}/>
      </div>
    </div>
  );
};

export default UserPage;





// import React from 'react';
// import { getUsers } from '../lib/data';
// import UserTable from '../../components/UserTable';
// import { createUser, deleteUser } from '../lib/action';
// import AddUserModal from '../../components/AddUserModal';

// const UserPage = async() => {
//   const data = await getUsers()
//   return (
//     <div>
//       <h1>User Management: {data.length}</h1>
//       <div className='flex justify-center'>
//         <AddUserModal createUser={createUser}/>
//       </div>
//       <div className='flex justify-center gap-8 items-center'>
       
//             <UserTable data={data} deleteUserAction={deleteUser}></UserTable>
            
//       </div>
//     </div>
//   );
// };

// export default UserPage;