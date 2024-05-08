export const getDateTime = (inputDate) => {
    const date = new Date(inputDate);
    const localDate = date.toLocaleDateString();
    const localTime = date.toLocaleTimeString();

    return `${localDate} at ${localTime}`;
};
