import React, {useState} from 'react'
import './App.css'

function initialCounter() {
    console.log('Make some calculations')
    return Math.trunc(Math.random() * 20)
}

function App() {
    //плохо для производительности
    // const [counter, setCounter] = useState(initialCounter())

    //а так начальная initialCounter  вызывается только раз
    const [counter, setCounter] = useState(() => {
        return initialCounter()
    })

    function increment() {
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    const [state, setState] = useState({
        name: 'Some name',
        year: Date.now()
    })

    function changeName() {
        setState(prev => {
            return {
                ...prev,
                name: 'Changed !!!'
            }
        })
    }

    return (
        <div className="container mt-4">
            <h1>Счетчик:{counter}</h1>
            <button className="btn btn-primary mr-2" onClick={increment}>Добавить</button>
            <button className="btn btn-danger mr-2" onClick={decrement}>Убрать</button>
            <button className="btn btn-warning" onClick={changeName}>Изменить текст</button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default App
