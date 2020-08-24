// eslint-disable-next-line
import React, {useEffect, useState} from 'react'
import './App.css'

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed', value)
    }, [value])
}

function useInput(initialValue) {
const [value, setValue]  = useState(initialValue)

    const onChange = event => {
    setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
    bind: {value, onChange},
        value,
        clear
    }
}

function App() {
 const input = useInput('')
 //   и добавить новую переменную
 const lastName = useInput('')
    useLogger(input.value)
    return (
        <div className="container mt-4">
            <h1>{input.value} {lastName.value}</h1>
            {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}
            {/*используем spread and get to way binging*/}
            <input type="text" {...input.bind} />
            {/*и можно просто добавить новый инпут*/}
            <input type="text" {...lastName.bind} />
            <hr/>
            <button className="btn btn-warning" onClick={() => {input.clear(); lastName.clear()}}>Clear input</button>
            {/* /.btn btn-warning */}

        </div>
    )
}

export default App
