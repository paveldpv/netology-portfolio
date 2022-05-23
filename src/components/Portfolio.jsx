import React from 'react'

import Tolbar from './Tolbar'

import {data} from '../data/data'
import { useState } from 'react'
import { useId } from 'react'

export default function Portfolio() {
   const id = useId()
   const [filter,Setfilter]=useState(`All`)

  return (
    <div className='box'>
    <Tolbar 
    filters={["All", "Websites", "Flayers", "Business Cards"]}
    selected={filter}
    onSelectFilter={(filter) => {
       console.log(filter)
       Setfilter(filter)
       }}/>


    <div className='portfolio'>
       {data.filter(item=>{
          if(filter==`All`){
            return item}
            else{
               return item.category==filter
            }
          }
          ).map((image,index)=>{
               return <div key={id+index}>
                           <img src={image.img} alt={image.category} />
                        </div>
       })}
    </div>

    </div>
  )
}
