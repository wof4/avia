import React from 'react';
import { Leg } from './leg/Leg';
import s from './legs.module.css'


export const Legs = (props) => {
    const { legs } = props
    return (
        <div>
            { legs.map((flight, index) => (<Leg key={index} flight={flight} />))}
            <div className={s.by}>ВЫБРАТЬ</div>
        </div>
    )
}