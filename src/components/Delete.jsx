'use client'
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
//import { toast } from 'react-toastify';

const Delete = ({user}) => {
  const handleDelete = async()=>{
  const res = await fetch(`http://localhost:5000/users/${user._id}`,{
    method: "DELETE",
    headers: {
      'content-type': 'application/json' 
    },
  })
  const data = await res.json()
//  if (data) {
//     toast.success('user item is successfully delete')
//   }
//   else{
//     toast.error('something went wrong')
//   }
  redirect('/user')

 
   }

  return (
     <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button variant="danger" onClick={()=>handleDelete(user._id)}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default Delete;