const request =  require ('request')



const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoib25jdSIsImEiOiJjazAzd3Q0Z3owN204M2NrYXIxYTEwcnVkIn0.Ce3RsOxa5Et8KpsRbwj0xg&limit=1'
    request ({url,json:true},(error,{body})=>{
            if (error){
                callback('Unable to connect to location services!',undefined)
            } else if (body.features.lenghth===0){
                callback('unable to find location try another search',undefined)
            } else {
                callback(undefined,{
                    latitude:body.features[0].center[1],
                    longitude:body.features[0].center[0],
                    location :body.features[0].place_name
                })
            }
        
    })
    
    }
    

    module.exports=geocode