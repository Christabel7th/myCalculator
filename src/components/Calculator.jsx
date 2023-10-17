import React from 'react'

const Calculator = () => {
    const handleClick = (el) => () => {
        console.log(el)
    }

    return (
        <div className='calculator'>
            {
                [
                    [7, 8, 9, 'Del'],
                    [4, 5, 6, '+'],
                    [1, 2, 3, '-'],
                    ['.', 0, '/', '*'],
                    ['RESET', '=']
                ].map((row, index) =>
                    <div key={`div-${index}`} {...(index === 4 && { className: 'reset-equals' })}>
                        {row.map((el, idx) => <button key={el}
                            {...{ className: index === 0 && idx === 3 ? 'delete' : index === 4 && idx === 0 ? 'reset' : index === 4 && idx === 1 ? 'equals' : '' }}
                            onClick={handleClick(el)}>{el}</button>)}
                    </div>
                )
            }
        </div>
    )
}

export default Calculator