// eslint-disable-next-line
import React, { useState, useCallback} from 'react'
import './App.css'
import ItemsList from './itemsList'



function App() {
    const [colored, setColored] = useState(false)
    const[ count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkblue' : 'black'
    }
    //Также для оптимизации в данном случае рендер только на изменение стейта count а
    // не colored
    //useCallback   кэширует функцию а не значение как useMemo
    // и поэтому в функцию можно передавать параметры как addIndex
    const generateItemsFromAPI = useCallback((addIndex) => {
        return new Array(count).fill('').map((_, i)=>`Element ${i + addIndex}`)
    }, [count])

    return (
        <div className="container mt-4">
            <h2 style={styles}>Elements count: {count}</h2>
            <button className="'btn btn-success mr-2" onClick={() => setCount(prevState => prevState +1)}>Add</button>
            <button className="'btn btn-warning mr-2" onClick={() => setCount(prevState => prevState -1)}>Remove</button>
            <button className="'btn btn-secondary" onClick={() => setColored(prevState => !prevState)}>Colored</button>

            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    )
}

export default App
