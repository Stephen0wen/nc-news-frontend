export const getDateTime = (inputDate) => {
    const date = new Date(inputDate);
    const localDate = date.toLocaleDateString();
    const localTime = date.toLocaleTimeString();

    return `${localDate} at ${localTime}`;
};

export const getEmailWarning = (str) => {
    if (str.length === 0) {
        return "Please enter your email address";
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValidEmail = regex.test(str);
    return isValidEmail ? "" : "Please enter a valid email address";
};

export const getNameWarning = (str) => {
    if (str.length === 0) {
        return "Please enter your display name";
    }
    if (str.length > 20) {
        ("Maximum length is 20 characters");
    }
    const regex = /^[\w-\s]+$/g;
    const isValidName = regex.test(str);
    return isValidName
        ? ""
        : "May only contain alphanumeric characters, spaces, hyphens and underscores";
};

export const getPasswordWarning = (str) => {
    if (str.length < 6) {
        return "Must contain at least 6 characters";
    }
    const regex = /^([^0-9]*|[^A-Z]*|[^a-z]*)$/;
    const isValidPassword = !regex.test(str);
    return isValidPassword
        ? ""
        : "Must contain a number, an uppercase and a lowercase letter";
};
