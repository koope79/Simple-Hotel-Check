import { isFunction } from "formik";

export const requiredField = value => {
    if (!value) return 'Заполните поле';
    return undefined;
}

export const minLength = min => {
    return function (value) {
        const req = requiredField(value);
        if (req) return req;
        else if(value && !/^[A-Za-z0-9]+$/iu.test(value)) return 'Только латинский';
        else if (value && value.length < min) return `Минимум ${min} символов`;
        return undefined;
    }
}

export const email = value => {
    const req = requiredField(value);
    if (req) return req;
    else if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Неверный e-mail';
    return undefined;
}

export const requiredCity = value => {
    const req = requiredField(value);
    if (req) return req;
    else if(value && !/^[А-Яа-я]+$/iu.test(value)) return 'Только русские символы';
    return undefined;
}

export const requiredCountDays = value => {
    const req = requiredField(value);
    if (req) return req;
    else if (value && !/^[0-9]+$/iu.test(value)) return 'Только цифры';
    return undefined;
}



