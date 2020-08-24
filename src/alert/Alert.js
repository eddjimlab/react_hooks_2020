import React from 'react'
import {useAlert} from './AlertContext'

/**
 * @return {null}
 * @return {null}
 */

export default function Alert() {

    const alert = useAlert()

    if(!alert.visible) return null

    return (
        <div className={'alert alert-danger'} onClick={alert.hide}>
            {alert.text}
        </div>
    )

}
