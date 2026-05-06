import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetails = async({params}) => {
  const {userId} = await params
  const user = await getUserById(userId)
  console.log(user);
  
  
  return (
    <div>
      
    </div>
  );
};

export default UserDetails;