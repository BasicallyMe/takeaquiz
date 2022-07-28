import React from 'react';

const OptionButton = (props) => {
    const { optionNumber, optionText } = props;
    return (
        <button className='option-button'>
            <span className='option-number'>{optionNumber}. </span>
            <span className='option-text'>{optionText}</span>
        </button>
    )
}

export default OptionButton;