import React from 'react'

export default function RentButton({rent, action, id}) {
  return (
    <div className='add-rent' onClick={()=>action(id)}>{rent?"+":"-"}</div>
  )
}
