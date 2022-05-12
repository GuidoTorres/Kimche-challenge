import React, { useState } from 'react'

const FilterButton = ({text}) => {
    const [buttonColor, setButtonColor]= useState()
    return (
        <div>
            <button>{text}</button>
        </div>
    )
}

export default FilterButton
