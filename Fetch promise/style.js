let pp = fetch("https://goweather.herokuapp.com/weather/Ny")
pp.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})


let aa = fetch("https://goweather.herokuapp.com/weather/Ny")
aa.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})