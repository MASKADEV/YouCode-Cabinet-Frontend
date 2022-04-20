import axios from 'axios';

export default class ApaHanlde {
    async fetchBookingDate(url : string, date : string) {
        try{
            const { data, status } = await axios.get(
              url,
              {
                headers: {
                  Accept: 'application/json',
                },
              },
            );
            console.log(JSON.stringify(data, null, 4));
            // 👇️ "response status is: 200"
            console.log('response status is: ', status);
            return data;
        } catch (error : any) {
              console.log('unexpected error: ', error);
              return 'An unexpected error occurred';
        }
    }
}