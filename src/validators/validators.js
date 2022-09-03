export const requiredField = (value) => {
    if (!value) return 'Заполните поле';
    return undefined;
}

export const minLength = (min) => {
    return function (value) {
        const req = requiredField(value);
        if (req) return req;
        else if(value && !/^[a-zA-Z\s]+$/iu.test(value)) return 'Только латинский';
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



