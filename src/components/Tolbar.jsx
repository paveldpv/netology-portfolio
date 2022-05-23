import React from 'react'
import { useId } from 'react'

export default function Tolbar({filters,selected,onSelectFilter}) {
   const id = useId()

   function handlerClick (e){      
      if(e.target.closest(`button`)){
         onSelectFilter(e.target.outerText)
      }
   }
   
  return (
    <div onClick={e=>handlerClick(e)} className='toolbar'>
    {filters.map((filter,index)=>{
       return <div key={id+index}>
                <button >{filter}</button>
             </div>
    })}
    </div>
  )
}
