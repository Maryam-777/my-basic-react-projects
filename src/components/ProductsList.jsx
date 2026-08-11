//import React from 'react'

const ProductsList = ({items,title}) => {
  return (
    <div className="border border-pink-700 mt-6 p-2 rounded-2xl mx-2 ">
        <h1 className="mb-40 font-semibold text-[30px] text-pink-600">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
              items.map((item,index)=>(
                 <div className="border border-pink-700 rounded-2xl p-2 hover:bg-gray-300 " key={index}>
                  <p className="text-emerald-400 text-2xl font-bold">{item.name}</p>
                  <p className="text-fuchsia-900">{item.price}</p>
                  <p className="text-amber-500 ">{item.description}</p>
                 </div>
              ))
            }
        </div>
    </div>
  )
}
 export default ProductsList