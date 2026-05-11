import React from 'react';
import { Button, Input, Label, TextField } from '@heroui/react';
const UserEditPage = ({user}) => {
  return (
        <div>
      UserEditPage
      <div>
        <form  className="flex flex-col gap-4">
                          <TextField className="w-full" name="name" type="text" defaultValue={user.name}>
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                          </TextField>
                          <TextField className="w-full" name="title" type="text" defaultValue={user.title}>
                            <Label>Title</Label>
                            <Input placeholder="Enter your title" />
                          </TextField>
                          <TextField className="w-full" name="email" type="email" defaultValue={user.email}>
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                          </TextField>
                          <TextField className="w-full" name="role" type="text" defaultValue={user.role}>
                            <Label>Role</Label>
                            <Input placeholder="Enter your role" />
                          </TextField>
                          <TextField className="w-full" name="description" type="text" defaultValue={user.description}>
                            <Label>Description</Label>
                            <Input placeholder="Enter your description" />
                          </TextField>
                            <Button slot="close" variant="secondary">
                              Cancel
                            </Button>
                            <Button type="submit">Update User</Button>
                        
                        </form>
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