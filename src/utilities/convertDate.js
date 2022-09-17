export const currentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

export const countDateTo = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + Number(days));
    return result.toISOString().split('T')[0];
}

export const converDateFormat = (date) => {
    const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const _date = new Date(date);
    return _date.getDate() + " " + month[_date.getMonth()] + " " + _date.getFullYear()
}

export const convertWordFormat = (value, words) => {
    value = Math.abs(value) % 100; 
    var num = value % 10;
    if(value > 10 && value < 20) return words[2]; 
    if(num > 1 && num < 5) return words[1];
    if(num == 1) return words[0]; 
    return words[2];
}