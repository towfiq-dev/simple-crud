import UserEditForm from '@/components/UserEditForm';
import React from 'react';
const getUserById = async(userId)=>{
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const data = await res.json()
  return data
}
const UserEditPage = async({params}) => {
  const {userId} = await params
  const user = await getUserById(userId)

  return (
        <div>
      UserEditPage
      <div>
      <UserEditForm user={user} userId={userId}/>
      </div>
    </div>
  );
};

export default UserEditPage;










// import { getUserById } from '@/app/lib/data';
// import { Button, Input, Label, TextField } from '@heroui/react';
// import React from 'react';

// const UserEditPage = async({params}) => {
//   const {userId} = await params
//   const user = await getUserById(userId)
//   console.log('editing user', user);
  
//   return (
    // <div>
    //   UserEditPage
    //   <div>
    //     <form  className="flex flex-col gap-4">
    //                       <TextField className="w-full" name="name" type="text" defaultValue={user.name}>
    //                         <Label>Name</Label>
    //                         <Input placeholder="Enter your name" />
    //                       </TextField>
    //                       <TextField className="w-full" name="email" type="email" defaultValue={user.email}>
    //                         <Label>Email</Label>
    //                         <Input placeholder="Enter your email" />
    //                       </TextField>
    //                       <TextField className="w-full" name="role" type="text" defaultValue={user.role}>
    //                         <Label>Role</Label>
    //                         <Input placeholder="Enter your role" />
    //                       </TextField>
                        
    //                         <Button slot="close" variant="secondary">
    //                           Cancel
    //                         </Button>
    //                         <Button type="submit">Update User</Button>
                        
    //                     </form>
    //   </div>
    // </div>
//   );
// };

// export default UserEditPage;