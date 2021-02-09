import React from 'react';
import s from './time.module.css'


export const Time = (props) => {
    const { departureData, arrivalData, duration} = props
    const departure = new Date(departureData)
    const arrival = new Date(arrivalData)

    let options = {
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    };

    const departureDataString = departure.toLocaleString("ru", options).replace(/,/g, "")
    const arrivalDataString = arrival.toLocaleString("ru", options).replace(/,/g, "")
    const durationHour = Math.floor(duration / 60)
    const durationMin = duration % 60

    return (

        <div className={s.time}>
            <div className={s.data} >
                <div className={s.time__dep_arr}>{ departure.getHours().toString().length < 2 ? '0' + departure.getHours() : departure.getHours()}</div>
                <span className={s.time__dep_arr}>:</span>
                <div className={s.time__dep_arr}>{departure.getMinutes().toString().length < 2 ? departure.getMinutes() + '0' : departure.getMinutes()}</div>
                <div className={s.day} >{departureDataString}</div>
            </div> 
            <div>{`${durationHour} ч ${durationMin} мин`} </div> 
            <div className={s.data} >
            <div className={s.day} >{arrivalDataString}</div>
                <div className={s.time__dep_arr}>{arrival.getHours()}</div>
                <span className={s.time__dep_arr}>:</span>
                <div className={s.time__dep_arr}>{arrival.getMinutes().toString().length < 2 ? arrival.getMinutes() + '0':  arrival.getMinutes()}</div>
            </div>
        </div>
    )
}