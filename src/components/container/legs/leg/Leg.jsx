import React from 'react';
import s from './leg.module.css'
import { Time } from './time/Time';




export const Leg= (props) => {
    
    const { flight } = props

    const departureCity = flight.segments[0].departureCity ? flight.segments[0].departureCity.caption : ""
    const departureAirport = flight.segments[0].departureAirport.caption
    const departureUid = flight.segments[0].departureAirport.uid
    const stop = flight.segments.length - 1
    const arrivalCity = flight.segments.length > 1 ? (flight.segments[1].arrivalCity ? flight.segments[1].arrivalCity.caption : '') : flight.segments[0].arrivalCity.caption
    const arrivalAirport = flight.segments.length > 1 ? flight.segments[1].arrivalAirport.caption : flight.segments[0].arrivalAirport.caption
    const arrivalUid = flight.segments.length > 1 ? flight.segments[1].arrivalAirport.uid : flight.segments[0].arrivalAirport.uid
    const arrival = flight.segments.length > 1 ? flight.segments[1].departureDate : flight.segments[0].departureDate
    const departure = flight.segments[0].departureDate

    return (
        <div className={s.card__container} >
            <div className={s.card}>
                <div className={s.departure_sity}>{departureCity},</div>
                <div>{departureAirport}</div>
                <div className={s.uid} >({departureUid})</div>
                <div className={s.arrow}></div>
                <div className={s.departure_sity} >{arrivalCity}</div>
                <div className={s.departure_sity} >{arrivalAirport}</div>
                <div className={s.uid} >({arrivalUid})</div>
            </div>
            <Time departureData={departure} arrivalData={arrival} duration={flight.duration} />
            <div className={s.stop__transfer} >
                <div className={s.stop__border}><div className={s.stop__border_line}></div></div>
                <div className={s.stop} >{stop === 0 ? (<div className={s.no_transfer} ></div>) : (<div className={s.one__transfer} >1 пересадка</div>)}</div>
                <div className={s.stop__border}><div className={s.stop__border_line}></div></div>
            </div>
            <div className={s.compani} >{`Рейс выполняет : ${flight.segments[0].airline.caption}`}</div>
        </div>
    )
}
