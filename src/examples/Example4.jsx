import React from 'react'
import { useAnimate } from 'framer-motion'

const Example4 = () => {
    const [scope, animate] = useAnimate();

    const sequence = () =>{
        animate(
            [
                [scope.current, {rotate: 90}],
                [scope.current, {scale: 1.5}],
                [scope.current, {rotate: 0}],
                [scope.current, {scale: 1}],
            ]
        )
    } 
    
  return (
    <div ref={scope} onClick={sequence} className='h-28 w-28 bg-red-600 rounded-2xl'>

    </div>
  )
}

export default Example4