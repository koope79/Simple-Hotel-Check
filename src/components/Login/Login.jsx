import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setUserData } from "../../redux/Auth-reducer";
import { email, minLength } from "../../validators/validators";
import s from "./Login.module.css";

const minLength8 = minLength(8);

const LoginForm = ({ setUserData }) => {
  const submit = (values, { setSubmitting }) => {
    setUserData(values.login, values.pass, true);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ login: '', pass: '' }}
      validateOnMount={false}
      onSubmit={submit}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <Form>
          <div className={s.form_block}>
            <div className={classnames(s.subTitle, {
              [s.errorFieldColor]: errors.login && touched.login
            })}>
              Логин
            </div>
            <div className={classnames(s.form__toolBar, {
              [s.errorFieldInput]: errors.login && touched.login
            })}>
              <Field
                type={"text"}
                name={"login"}
                validate={email}
                placeholder={""}
              />
            </div>
            {errors.login && touched.login && (
              <div className={classnames(s.errorField, {
                [s.errorFieldColor]: errors.login
              })}>
                {errors.login}
              </div>
            )}
          </div>
          <div className={s.form_block}>
            <div className={classnames(s.subTitle, {
              [s.errorFieldColor]: errors.pass && touched.pass
            })}>
              Пароль
            </div>
            <div className={classnames(s.form__toolBar, {
              [s.errorFieldColor]: errors.pass && touched.pass
            })}>
              <Field
                type={"password"}
                name={"pass"}
                validate={minLength8}
                placeholder={""}
              />
            </div>
            {errors.pass && touched.pass && (
              <div className={classnames(s.errorField, {
                [s.errorFieldColor]: errors.pass
              })}>
                {errors.pass}
              </div>
            )}
          </div>
          <div className={s.form__button}>
            <button
              name={"loginButton"}
              type={"submit"}
              disabled={isValid ? isSubmitting : "disabled"}
            >
              Войти
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const Login = ({ isAuth, setUserData }) => {
  let { state } = useLocation();
  if (state == null) state = "/home";

  if (isAuth) {
    return <Navigate to={state.path || state} />
  }
  return (
    <div className={s.content}>
      <div className={s.overlay}></div>
      <div className={s.opacity}></div>
      <div className={s.loginform}>
        <div className={s.title}>Simple Hotel Check</div>
        <LoginForm setUserData={setUserData} />
      </div>
    </div>

  );
};

const mapToStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapToStateToProps, { setUserData })(Login);
