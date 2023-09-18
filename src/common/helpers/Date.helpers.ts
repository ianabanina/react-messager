import moment from "moment";

export function formatDateForChat(date: string): string {
    const momentDate = moment(date);
    const formattedTime = moment(date).format('LT');

    if (momentDate.isSame(moment(), 'day')) {
        return formattedTime;
    }

    const yesterdayDate = moment().subtract(1, 'day');
    if (momentDate.isSame(yesterdayDate, 'day')) {
        return `${formattedTime}, yesterday`
    }

    if (momentDate.isSame(moment(), 'year')) {
        return moment(date).format('LT, MMM D');
    }

    return moment(date).format('LT, ll')
}
