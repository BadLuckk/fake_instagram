class DateService {

    static formatDate(date) {

        const dateObject = new Date(date);
        console.log("Date", dateObject);
        
        const day = dateObject.getUTCDate();
        const month = dateObject.getUTCMonth();
        const year = dateObject.getUTCFullYear();
        return day + "-" + month + "-" + year;
    }
}

export default DateService;