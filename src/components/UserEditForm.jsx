'use client'
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditForm = ({userId, user}) => {
    const updateUser = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updateUser = Object.fromEntries(formData.entries())
    const res = await fetch(`http://localhost:5000/users/${userId}`,{
    method: 'PATCH',
     headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(updateUser)
    
    })
    const data = await res.json()
    return data
  }
  return (
           <form  className="flex flex-col gap-4" onSubmit={updateUser}>
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
  );
};

export default UserEditForm;