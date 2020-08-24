// eslint-disable-next-line
import React, {useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')
// const [render]=useState(1)
    useEffect(() => {
        renderCount.current++
    })

    useEffect(()=> {
        prevValue.current = value
    }, [value])
    const focus = () => inputRef.current.focus()
    return (
        <div className="container mt-4">
            <h2>Количество рендеров: {renderCount.current}</h2>
            <h4>Прошлое состояние: {prevValue.current}</h4>
            <input type="text" ref={inputRef} onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>
            {/* /.btn btn-success */}
        </div>
    )
}

export default App
