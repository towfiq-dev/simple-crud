import React from 'react';
const getUserById = async(userId)=>{
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const data = await res.json()
  return data
}
const UserDetails = async({params}) => {
  const {userId} = await params
  const users = await getUserById(userId)
  return (
    <div>
      <h1>User Details</h1>
      <p>{users.name}</p>
    </div>
  );
};

export default UserDetails;