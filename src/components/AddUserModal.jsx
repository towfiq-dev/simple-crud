"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
//import { revalidatePath } from "next/cache";

import { toast } from "react-toastify";


const AddUserModal = () => {
  const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const getPost = Object.fromEntries(formData.entries())
    const res = await fetch('http://localhost:5000/users',{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(getPost)
    })
    const data = await res.json()
    // if (data.insertedId) {
    //   revalidatePath('/user')
    // }
     if (data) {
    toast.success('user item is successfully added')
  }
  else{
    toast.error('something went wrong')
  }

  }
  return (
    <div>
      <Modal>
      <Button variant="secondary">Open Contact Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-150">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" >
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your Email" />
                  </TextField>
                  <TextField className="w-full" name="role" type="text">
                    <Label>Role</Label>
                    <Input placeholder="Enter your Role" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your description" />
                  </TextField>

              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    </div>
  );
};

export default AddUserModal;


// "use client";
// import { Envelope } from "@gravity-ui/icons";
// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

// const AddUserModal = ({ createUser }) => {
//   return (
//     <Modal>
//       <Button variant="secondary">Open Contact Form</Button>
//       <Modal.Backdrop>
//         <Modal.Container placement="auto">
//           <Modal.Dialog className="sm:max-w-md">
//             <Modal.CloseTrigger />
//             <Modal.Header>
//               <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                 <Envelope className="size-5" />
//               </Modal.Icon>
//               <Modal.Heading>Contact Us</Modal.Heading>
//               <p className="mt-1.5 text-sm leading-5 text-muted">
//                 Fill out the form below and well get back to you. The modal adapts automatically
//                 when the keyboard appears on mobile.
//               </p>
//             </Modal.Header>
//             <Modal.Body className="p-6">
//               <Surface variant="default">
//                 <form action={createUser} className="flex flex-col gap-4">
//                   <TextField className="w-full" name="name" type="text">
//                     <Label>Name</Label>
//                     <Input placeholder="Enter your name" />
//                   </TextField>
//                   <TextField className="w-full" name="email" type="email">
//                     <Label>Email</Label>
//                     <Input placeholder="Enter your email" />
//                   </TextField>
//                   <TextField className="w-full" name="role" type="text">
//                     <Label>Role</Label>
//                     <Input placeholder="Enter your role" />
//                   </TextField>
//                   <Modal.Footer>
//                     <Button slot="close" variant="secondary">
//                       Cancel
//                     </Button>
//                     <Button type="submit">Add User</Button>
//                   </Modal.Footer>
//                 </form>
//               </Surface>
//             </Modal.Body>
//           </Modal.Dialog>
//         </Modal.Container>
//       </Modal.Backdrop>
//     </Modal>
//   )
// };

// export default AddUserModal;