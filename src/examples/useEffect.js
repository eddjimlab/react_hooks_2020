import React, {useEffect, useState} from 'react'
import './App.css'


function App() {

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({x: 0, y: 0})

    // useEffect(() => {
    //     console.log('render')
    // })
    const moseMoveHandler  = event => {
        setPos({x: event.clientX, y: event.clientY})
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])
    //если передать в зависимости пустой массив, то код внутри будет вызываться лишь раз
    useEffect(() => {
        console.log('componentDidMount')
        window.addEventListener('mousemove', moseMoveHandler)

        return ()=> {
            window.removeEventListener('mousemove', moseMoveHandler)
        }
    }, [])


    return (
        <div className="container mt-4">
            <h2>Ресурс:{type}</h2>
            <button className="btn btn-primary mr-2" onClick={() => setType('users')}>Пользователи</button>
            <button className="btn btn-success mr-2" onClick={() => setType('todos')}>Todo</button>
            <button className="btn btn-secondary" onClick={() => setType('posts')}>Посты</button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App
