
function myFunction(){
    // Take one value from user 
    let user = prompt("Enter S, W or G") 

    // Generate a random value  
    let cpuI = Math.floor(Math.random() *3);
    let cpu = ["S", "W", "G"][cpuI]

    // to check value of random generate value and user value
    console.log("value of cpuI random number is " + cpuI);
    console.log("value of cpu random no.*s w g is " + cpu);

    const match = (cpu, user) => {
        if (cpu === user) {
            return "Nobody"
        }
        else if (cpu === "S" && user === "W") {
            return "cpu"
        }
        else if (cpu === "S" && user === "G") {
            return "user"
        }
        else if (cpu === "G" && user === "W") {
            return "user"
        }
        else if (cpu === "G" && user === "S") {
            return "cpu"
        }
        else if (cpu === "W" && user === "S") {
            return "user"
        }
        else if (cpu === "W" && user === "G") {
            return "cpu"
        }
    }
    let result = match(cpu, user)
    document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}`)

}



