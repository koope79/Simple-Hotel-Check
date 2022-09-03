export const currentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

export const countDateTo = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
}

export const converDateFormat = (date) => {
    const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const _date = new Date(date);
    return _date.getDate() + " " + month[_date.getMonth()] + " " + _date.getFullYear()
}