// eslint-disable-next-line
import React, {useEffect, useState, useMemo} from 'react'
import './App.css'

function complexCompute(num) {
    let i = 0
    while (i < 100000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    //с помощью хука оптимизировали код: метод сложных вычислений запускается
    // только при изменении стейта number, но не стейта colored
    const computed = useMemo(()=>{
        return  complexCompute(number)
    }, [number])

    //здесь эффект помогает не вызывать перерисовку компонента при изменении number.
    //А изменяется он, потому что каждый раз создается новый объект computed и в js каждый
    // объект не равен другому
    const styles = useMemo(()=> {
        return {
            color: colored ? 'darkblue' : 'black'
        }
    }, [colored])

    useEffect(()=> {
        console.log('Styles was changed')
    }, [styles])

    return (
        <div className="container mt-4">
            <h2 style={styles}>Вычисляемое свойство: {computed}</h2>
            <button className={'btn btn-primary mr-2'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-success mr-2'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Color</button>
        </div>
    )
}

export default App
