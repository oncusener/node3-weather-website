
const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/8c29d74261041b8e82f900151723c472/' + latitude + ',' +longitude+'?units=si&lang=tr'
        request({ url,json:true },(error,{body})=>{
            if (error){
                callback('unable to connect to service',undefined)
            } else if (body.error){
                callback('unable to find location try another search',undefined)}
            else {
                callback(undefined,body.daily.data[0].summary + 'Beklenilen en yüksek sıcaklık ' + body.daily.data[0].temperatureHigh + ' ve ' + ' Beklenilen en düşük sıcaklık ' + body.daily.data[0].temperatureLow  + ' olacak ' +  'Hava şu anda ' + body.currently.temperature  + ' derece.Yağmur yağma ihtimali % ' +  body.currently.precipIntensity)
            }
        })
}


module.exports=forecast