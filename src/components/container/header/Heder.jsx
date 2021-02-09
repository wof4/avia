import React from 'react';
import s from './header.module.css'


export const Header = (props) => {

    const{ price , imgCode } = props
    return (
        <div className={s.card__header}>
        <div className={s.logo}><img src={require(`../../../images/${imgCode}.png`)} alt={imgCode}/></div>
        <div className={s.header__price}>
            <div className={s.price}>{price} P</div>
            <div className={s.price__text}>Стоимость для одного взрослого пассажира</div>
        </div>
    </div>
    )
}