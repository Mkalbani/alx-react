export const getFullYear = () => {
    // returns the current year
    return new Date().getFullYear()
}

export const getFooterCopy = (isIndex=false) => {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export const getLatestNotification = () => "<strong>Urgent requirement</strong> - complete by EOD"