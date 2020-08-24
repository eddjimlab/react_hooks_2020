// eslint-disable-next-line
import React from 'react'
import './App.css'
import Main from './Main'
import Alert from './alert/Alert'
import {AlertProvider} from './alert/AlertContext'

export const AlertContext = React.createContext()
function App() {

    return (
        <AlertProvider>
            <div className="container mt-4">
                <Alert/>
                <Main toggle={()=> {}}/>
            </div>
        </AlertProvider>
    )
}

export default App
