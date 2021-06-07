import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function list() {
    return (
        <div className="messageArea">
            <div>
                <p>Get a new pair of shoes.</p>
                <p>
                <button><FontAwesomeIcon icon={faEdit} /></button>
                <button><FontAwesomeIcon icon={faTrashAlt} /></button>
                </p> 
            </div>
            <div>
                <p>Replace broken phone screen.</p>
                <p>
                <button><FontAwesomeIcon icon={faEdit} /></button>
                <button><FontAwesomeIcon icon={faTrashAlt} /></button>
                </p> 
            </div>
            <div>
                <p>Confirm course registration.</p>
                <p>
                <button><FontAwesomeIcon icon={faEdit} /></button>
                <button><FontAwesomeIcon icon={faTrashAlt} /></button>
                </p> 
            </div>
        </div>
    )
}
