import React from 'react';
import { Field, Form, Formik } from 'formik';
import s from './sort-form.module.css'


export const SortForm = (props) => {

    const { carriers, currentCarrier} = props

    const resetButton = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        props.setTickets({ sort: '', checked: [], price_up: 0, price_up_to: 1000000, compani: [] })

    }

    return (
        <div>

            <Formik
                initialValues={{
                    sort: '',
                    checked: [],
                    price_up: '0',
                    price_up_to: '1000000',
                    compani: [],
                }}
                onSubmit={(values) => {
                    console.log(values)
                    props.setTickets(values)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }}
            >
                {({ values }) => (
                    <Form  >
                        <div className={s.form_container} >
                            <div className={s.form__title}>Сортировать</div>
                            <div className={s.form__radiobuttons} role="group" aria-labelledby="my-radio-group">
                                <label><Field type="radio" name="sort" value="price_up" />- по возрастанию цены</label>
                                <label><Field type="radio" name="sort" value="price_up_to" />- по убыванию цены</label>
                                <label><Field type="radio" name="sort" value="time" />- по времени в пути</label>
                            </div>
                            <div className={s.form__title}>Фильтровать</div>
                            <div className={s.form__checkbox}>
                                <label><Field type="checkbox" name="checked" value="1" />- 1 пересадка</label>
                                <label><Field type="checkbox" name="checked" value="0" />- без пересадок</label>
                            </div>
                            <div className={s.form__price}>
                                <div className={s.form__title}>Цена</div>
                                <label className={s.form__price_input} >От <Field name="price_up" type="text" /></label>
                                <label className={s.form__price_input} >До <Field name="price_up_to" type="text" /></label>
                            </div>
                            <div className={s.form__title}>Авиакомпании</div>
                            <div className={s.form__radiobuttons}>
                                {Array.from(carriers).map(([key, value]) => (
                                    <div className={s.bast__price_container} >
                                        < label className={s.bast__price} key={key}>
                                            <Field disabled={!currentCarrier.includes(key)} type="checkbox" name="compani" value={key} />
                                            {value.caption}
                                        </label> от {value.price}
                                    </div>
                                ))}
                            </div>
                            <button className={s.form__button} type="submit">искать</button>
                            <button onClick={resetButton} type='reset'>сбросить</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

    ;








