








// import { revalidatePath } from "next/cache";
// export const createUser = async(formData)=>{
//   'use server'
//   const newUser = Object.fromEntries(formData.entries())
//   const res = await fetch('http://localhost:5000/users', {
//     method: 'POST',
//     headers:{
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(newUser)
//   })
//   const data = await res.json()
//   console.log(data, 'data added');
//   if (data.insertedId) {
//     revalidatePath('/users')
//   }
//   return data
// }


// export const updateUser = async(formData)=>{
//   const updatedUser = Object.fromEntries(formData.entries())
//   const res = await fetch(``, {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body:JSON.stringify(updateUser)
//   })

//   const data = await res.json()
//   console.log('after update', data);
//   if (condition) {
    
//   }
// } 

// export const deleteUser = async(userId)=>{
//   'use server'
//   const res =await fetch(`http://localhost:5000/users/${userId}`, {
// method: 'DELETE'
//   })
  
//   const data = await res.json()
//   return data
// }