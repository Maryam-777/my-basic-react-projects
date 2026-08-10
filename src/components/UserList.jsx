//import React from 'react'
 const UserList = ({items,title}) => {
  return (
   <div>
        <h1>{title}</h1>
        <div>
            {
              items.map((item)=>(
                 <div>
                  <p>{item.name}</p>
                  <p>{item.age}</p>
                  <p>{item.city}</p>
                 </div>
              ))
            }
        </div>
    </div>
  )
}

export default UserList
