import React from 'react'
import '../machineinput/Machineinput.css'
import Card from '../../components/card/Card'
import { properties } from '../../constants/data'

const Machineinput = () => {
  return (
    <div className='properties'>
        {properties.map((item) => (
            <Card data={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Machineinput;