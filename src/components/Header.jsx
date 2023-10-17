import React from 'react'
import { useState } from 'react'

const Header = () => {

    const [themeColor, setThemeColor1] = useState('#D13E30')

    return (
        <header>
            <h1>calc</h1>
            <div>
                <p>THEME</p>
                <div className='theme'>
                    <p>1 2 3</p>
                    <div className='theme-choice-bg'>

                        <div
                            onClick={() => themeColor}
                            onDoubleClick={() => setThemeColor1('purple')}>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

// theme1 = () => {
//     const [theme, setTheme] = useState
//     return (

//    )
// }

export default Header