export default class DateSerices {    

    currentDate =  () => {
        var currentDate = new Date();
        var dd = String(currentDate.getDate() + 1).padStart(2, '0');
        var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        var yyyy = currentDate.getFullYear();
        const today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

}