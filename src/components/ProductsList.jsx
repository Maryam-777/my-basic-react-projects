//import React from 'react'

const ProductsList = ({items,title}) => {
  return (
    <div>
        <h1>{title}</h1>
        <div>
            {
              items.map((item)=>(
                 <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
                 </div>
              ))
            }
        </div>
    </div>
  )
}
 export default ProductsList