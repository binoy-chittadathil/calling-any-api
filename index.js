const express=require('express');
const axios=require('axios');
const app=express();

const apiURL='https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today'

axios.get(apiURL)
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{
        console.error(err.message)
    })

app.listen('3000',()=>{
    console.log('server started')
})