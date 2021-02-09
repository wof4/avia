import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlights, setCarrierTc, setTicketsCountTC } from '../../ticketsReducer';
import { getFlightsArray, getTicketsCount, getCarriers, getPrice } from '../../selectors';
import { Legs } from './legs/Legs';
import s from './container.module.css';
import { SortForm } from './sort-form/Sort-form';
import { Header } from './header/Heder';




export const Container = () => {
    const flightsArray = useSelector(getFlightsArray)
    const ticketsCount = useSelector(getTicketsCount)
    const carriers = useSelector(getCarriers)
    const price = useSelector(getPrice)
    const dispatch = useDispatch()

    const tickets = flightsArray.filter((i,index) => index < ticketsCount)
    const allCarriers = flightsArray.map((i) => i.flight.carrier.airlineCode)
    const currentCarrier = Array.from(new Set(allCarriers))

    useEffect(() => {
        dispatch(getFlights())
    }, [])

    useEffect(() => {
        dispatch(setCarrierTc())
    }, [])

    const buttonClick = (e) => {
        dispatch(setTicketsCountTC(ticketsCount + 1))
    }

    const setTickets = (value) => {
        dispatch(getFlights(value))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.sort_form}><SortForm price={price} currentCarrier={currentCarrier} carriers={carriers} setTickets={setTickets} /></div>
            <div className={s.tickets_container}>
                {tickets.map((fligt) => {
                    return (
                        <div key={fligt.flightToken} className={s.card__container}>
                            <Header price={fligt.flight.price.total.amount} imgCode={fligt.flight.carrier.airlineCode} />
                            <Legs legs={fligt.flight.legs} />
                        </div>
                    )
                })}
                <div className={s.showMore} onClick={buttonClick} > Показать еще </div>
            </div>
        </div>
    )
}





