import React from 'react';
import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import Delete from './Delete';
const UserTable = ({users}) => {
  return (
   <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column>NO.</Table.Column>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Description</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {
              users.map(user=>{return(
              <Table.Row key={user._id}>
              <Table.Cell>{user._id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.title}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.description}</Table.Cell>
              <Table.Cell>
                <Link href={`/user/${user._id}`}><Button variant='outline'>Details</Button></Link>
                <Link href={`/user/${user._id}/edit`}><Button variant='outline'>Edit</Button></Link>
                <Delete/>
              </Table.Cell>
            </Table.Row>
              )})
            }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UserTable;



// 'use client'
// import { AlertDialog, Button, Table } from '@heroui/react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react';
// //import { deleteUser } from '../lib/action';

// const UserTable = ({data, deleteUserAction}) => {
//   const router = useRouter();
//   const handleDelete = async(userId) => {
//     await deleteUserAction(userId)
//     router.refresh();
//   }
//   return (
//     <Table>
//       <Table.ScrollContainer>
//         <Table.Content aria-label="Team members" className="min-w-[600px]">
//           <Table.Header>
//             <Table.Column isRowHeader>Name</Table.Column>
//             <Table.Column>Email</Table.Column>
//             <Table.Column>Role</Table.Column>
//             <Table.Column>Action</Table.Column>
//           </Table.Header>
//           <Table.Body>

//             {
//               data.map((user) => 
//               <Table.Row key={user._id}>
//               <Table.Cell>{user.name}</Table.Cell>
//               <Table.Cell>{user.email}</Table.Cell>
//               <Table.Cell>{user.role}</Table.Cell>
//               <Table.Cell className='mr-3'>
//                 <Link href={`/user/${user._id}`}>
//                 <Button variant='outline'>
//                   Details
//                 </Button>
//                 </Link>
//                 <Link href={`/user/${user._id}/edit`}>
//                 <Button variant='outline'>
//                   Edit
//                 </Button>
//                 </Link>
//                 {/* <Link href={`/user/${user._id}`}>
//                 <AlertDialog>
//       <Button variant="danger">Delete Project</Button>
//       <AlertDialog.Backdrop>
//         <AlertDialog.Container>
//           <AlertDialog.Dialog className="sm:max-w-[400px]">
//             <AlertDialog.CloseTrigger />
//             <AlertDialog.Header>
//               <AlertDialog.Icon status="danger" />
//               <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
//             </AlertDialog.Header>
//             <AlertDialog.Body>
//               <p>
//                 This will permanently delete <strong>My Awesome Project</strong> and all of its
//                 data. This action cannot be undone.
//               </p>
//             </AlertDialog.Body>
//             <AlertDialog.Footer>
//               <Button  variant="tertiary">
//                 Cancel
//               </Button>
//               <Button onClick={()=> handleDelete(user._id)} slot="close" variant="danger">
//                 Delete Project
//               </Button>
//             </AlertDialog.Footer>
//           </AlertDialog.Dialog>
//         </AlertDialog.Container>
//       </AlertDialog.Backdrop>
//     </AlertDialog>
//                 </Link> */}
//                 <AlertDialog>
//   <AlertDialog.Trigger>
//     <Button variant="danger">Delete</Button>
//   </AlertDialog.Trigger>

//   <AlertDialog.Backdrop>
//     <AlertDialog.Container>
//       <AlertDialog.Dialog>

//         <AlertDialog.Header>
//           <AlertDialog.Heading>
//             Are you sure?
//           </AlertDialog.Heading>
//         </AlertDialog.Header>

//         <AlertDialog.Body>
//           This will delete user permanently.
//         </AlertDialog.Body>

//         <AlertDialog.Footer>
//           <Button variant="tertiary">Cancel</Button>

//           <Button
//             onClick={() => handleDelete(user._id)}
//             slot="close"
//             variant="danger"
//           >
//             Delete
//           </Button>
//         </AlertDialog.Footer>

//       </AlertDialog.Dialog>
//     </AlertDialog.Container>
//   </AlertDialog.Backdrop>
// </AlertDialog>
//               </Table.Cell>
//               </Table.Row>)
//             }
//           </Table.Body>
//         </Table.Content>
//       </Table.ScrollContainer>
//     </Table>
//   );
// };

// export default UserTable;