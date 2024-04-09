import React from 'react'

const TextInput = ({
    value,
    setValue,
    placeholder,
    label
}) => {
    return (
        <>
            <label>{label}:</label>
            <input 
                type="text" 
                value={value} 
                onChange={
                    (e) => setValue(e.target.value)} 
                placeholder={placeholder} 
                />
        </>
    )
}

export default TextInput