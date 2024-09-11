const btn= document.getElementById("btn")

function handleClick(e){
    e.target.innerHTML = "Bonjour"
    window.location = "https://www.google.com"
}


const handleClick = () =>{
    console.log("test ...")
}

console.log("test ...", btn)
