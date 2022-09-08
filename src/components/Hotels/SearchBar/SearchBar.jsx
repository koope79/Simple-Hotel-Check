import s from "./SearchBar.module.css";
import React from "react";
import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { requiredCity, requiredCountDays, requiredField } from "../../../validators/validators";
import { useRef } from "react";
import { fetchHotels } from "../../../redux/Hotels-reducer";
import { currentDate } from "../../../utilities/convertDate";
import classnames from 'classnames';


const SearchBar = () => {
    const dispatch = useDispatch();
    const ref = useRef();

    const submit = (values, { setSubmitting }) => {
        dispatch(fetchHotels(values.loca, values.date, values.days))
        setSubmitting(false);
    }

    return (
        <Formik initialValues={{ loca: '', date: '', days: '' }} validateOnMount={false} onSubmit={submit}>
            {({ errors, touched, isValid, isSubmitting }) => (
                <Form>
                    <div className={s.searchBar}>

                        <div className={s.barBlock}>
                            <div className={s.barBlock_title}>Локация</div>
                            <div className={s.barBlock_input}>
                                <Field type="text" name="loca" validate={requiredCity} placeholder="Москва" />
                            </div>
                            {errors.loca && touched.loca && <div className={classnames(s.errorField, {[s.errorFieldColor]: errors.loca})}>{errors.loca}</div>}
                        </div>

                        <div className={s.barBlock}>
                            <div className={s.barBlock_title}>Дата заселения</div>
                            <div className={s.barBlock_input}>
                                <Field innerRef={ref} type="text" onFocus={() => (ref.current.type = "date")} name="date" validate={requiredField} placeholder={currentDate()} />
                            </div>
                            {errors.date && touched.date && <div className={classnames(s.errorField, {[s.errorFieldColor]: errors.date})}>{errors.date}</div>}
                        </div>

                        <div className={s.barBlock}>
                            <div className={s.barBlock_title}>Количество дней</div>
                            <div className={s.barBlock_input}>
                                <Field type="text" name="days" validate={requiredCountDays} placeholder="1" />
                            </div>
                            {errors.days && touched.days && <div className={classnames(s.errorField, {[s.errorFieldColor]: errors.days})}>{errors.days}</div>}
                        </div>

                        <div className={s.barBlock__button}>
                            <button name="searchButton" type="submit" disabled={isValid ? isSubmitting : "disabled"}>Найти</button>
                        </div>

                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default SearchBar;
