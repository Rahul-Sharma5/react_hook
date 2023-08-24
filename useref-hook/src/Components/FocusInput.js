import React, {useEffect, useRef} from 'react'

const FocusInput = () => {

    const inputRef = useRef(null)

    useEffect(()=>{
    // Focus The Input Element
    inputRef.current.focus()
    }, [])


  return (
    <div>
        <h2>useRef Hook Part-1</h2>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput