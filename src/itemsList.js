import React, {useEffect, useState} from 'react'

export default function ItemsList({getItems}) {
    const[items, setItems] = useState([])

    useEffect(()=> {
        const addIndex = 42
        const newItems = getItems(addIndex)
        setItems(newItems)
        console.log(`render element`)
    }, [getItems])

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li> )}
        </ul>
    )

}
