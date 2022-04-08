<template >
    <div class="w-full h-full flex flex-col mt-4 justify-center items-center">
        <form @submit.prevent="">
            <div class="flex flex-col font-[Poppins] font-semibold ">
                <label for="date">Date</label>
                <input @change="handleChange" v-model="date"  type="date" :min="currentDate" class="bg-white px-3 py-2 w-[240px] shadow-sm rounded" id="date">
            </div>
            <div class="flex flex-col font-[Poppins] font-semibold  mt-4">
                <label for="service_type">Service Type</label>
                <select @change="serviceChange" class="px-3 py-2 w-[240px] shadow-sm rounded" v-model="services_type" id="service_type">
                  <option>Teeth Cleaning</option>
                  <option>Fillings and Restorations</option>
                  <option>Tooth Extractions</option>
                  <option>Root Canal</option>
                  <option>Wisdom Teeth Removal</option>
                  <option>Dentures</option>
                </select>
            </div>
            <div class="flex flex-col font-[Poppins] font-semibold  mt-4">
                <label for="time">Time</label>
                <select class="px-3 py-2 w-[240px] shadow-sm rounded" name="" id="time">
                  <option v-for="timess in times" :key="timess.time">{{timess.time}}</option>
                </select>
            </div>
            <div class="mt-11 font-[Poppins] flex flex-row justify-between items-center">
                <h1 class="font-semibold text-2xl">Price: {{price}}$</h1>
                <div>
                    <button class="px-4 py-2 bg-indigo-500 text-white font-bold rounded-lg">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import DateService from '@/services/date';
import axios from 'axios';

export default {
    name : 'AppointmentVue',
    data : () => {
        return {
            times : [{time : '08:00', booked : false}, {time : '09:00', booked : false}, {time : '10:00', booked : false}, 
                    {time : '11:00', booked : false}, {time : '14:00', booked : false}, {time : '15:00', booked : false}, 
                    {time : '16:00', booked : false}, {time : '17:00', booked : false}, 
            ],
            date: '',
            currentDate : "",
            services_type : "",
            price : 0,
        }
    },
    methods : {
        async handleChange() {
            let timesBooked = [];
            let url = "http://172.16.139.9/Booking_Medical_Backend/users/checkBooked";
            let res = await axios.post(url, JSON.stringify({date : this.date}));
            let Alldata = res.data;
            Alldata.map(data => {
                timesBooked.push(data.booking_time);
            })
            console.log(timesBooked);
        },
        serviceChange() {
            switch (this.services_type) {
                case "Teeth Cleaning":
                    this.price = 300;
                    break;
                case "Fillings and Restorations":
                    this.price = 120;
                    break;
                case "Tooth Extractions":
                    this.price = 199;
                    break;
                case "Root Canal":
                    this.price = 99;
                    break;
                case "Wisdom Teeth Removal":
                    this.price = 159;
                    break;
                case "Dentures":
                    this.price = 499;
                    break;
                default:
                    this.price = 0
            }
        }
    },
    mounted() {
        this.currentDate = DateService.currentDate();
    }
}
</script>