import React from 'react'
import Header from './components/Header'
import Total from './components/Total'
import Calculator from './components/Calculator'
import './style.css'

const App = () => {
    return (
        <div className='calc'>
            <Header />
            <Total />
            <Calculator />
        </div>
    )
}

export default App