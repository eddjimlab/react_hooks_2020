import React from 'react'
import {useAlert} from './alert/AlertContext'

export default function Main() {
    const {show,hide} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={() => show('Text form Main.js')} className="btn btn-success mr-2">Показать alert</button>
            <button onClick={hide} className="btn btn-danger">Скрыть alert</button>
        </>
    )
}
