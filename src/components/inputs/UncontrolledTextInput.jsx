import React, { useState } from 'react'

const UncontrolledTextInput = () =>
{
    const [ value, setValue] = useState('')

    return (
        <>
            <label>uncontrolled text input:</label>
            <input 
                type="text" 
                value={value} 
                onChange={
                    (e) => setValue(e.target.value)} 
                placeholder={'placeholder'} 
                />
        </>
    )
}

export default UncontrolledTextInput