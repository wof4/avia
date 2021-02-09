
import { data } from "./api/localData/localData32"
const flightsArray = data.result.flights
export const filterFlights = (values = { sort: '', checked: [], price_up: 0, price_up_to: 1000000, compani: [] }) => {
    const filterTicketsByTransfer = flightsArray.filter(i => {
        if (values.checked.length === 1 || values.checked.length === 0) {
            return i
        } if (values.checked[0] === '0') {
            return i.flight.legs[0].segments.length < 2 && i.flight.legs[1].segments.length < 2
        } if (values.checked[0] === '1') {
            return i.flight.legs[0].segments.length > 1 || i.flight.legs[1].segments.length > 1
        }
        return filterTicketsByTransfer
    })

    const filterTicketsByСompany = getFilterTicketsByСompany(filterTicketsByTransfer, values.compani)
    const filterTicketsByPrice = getFilterTicketsByPrice(filterTicketsByСompany, values.price_up, values.price_up_to)
    const sortTicketsByData = getSortTicketsByData(filterTicketsByPrice, values.sort)
    return sortTicketsByData
}


const getSortTicketsByData = (tickets, direction) => {
    const sortData = tickets.sort((a, b) => {
        if (direction === 'price_up') return a.flight.price.total.amount - b.flight.price.total.amount
        if (direction === 'price_up_to') return b.flight.price.total.amount - a.flight.price.total.amount
        if (direction === 'time') return a.flight.legs[0].duration + a.flight.legs[1].duration - b.flight.legs[0].duration + b.flight.legs[1].duration
    })
    return sortData
};

const getFilterTicketsByPrice = (tickets, up, to) => {
    const filterPrice = tickets.filter(i => +i.flight.price.total.amount >= +up && +i.flight.price.total.amount <= +to)
    return filterPrice
}

const getFilterTicketsByСompany = (tickets, company = []) => {
    const filterСompany = tickets.filter(i => {
        if (company.length === 0) {
            return i
        } else {
            return i.flight.carrier.airlineCode === company[0]
        }
    })
    return filterСompany
}

export const getCarriers = () => {
    const flightsArray = data.result.flights
    const carriers = new Map();
    flightsArray.forEach(({ flight: { carrier: flightCarrier } }) => carriers.set(flightCarrier.airlineCode, { caption: flightCarrier.caption, price: Infinity }));
    getBestPrice(carriers)
    return carriers
}

const getBestPrice = (carriers) => {
    flightsArray.forEach(({ flight }) => {
        const { price, carrier } = flight;
        const { total } = price;
        const key = carrier.airlineCode;
        if (carriers.has(key)) {
            let old = carriers.get(key);
            carriers.set(key, ({ ...old, price: Math.min(old.price, total.amount) }));
        }
    })
}




