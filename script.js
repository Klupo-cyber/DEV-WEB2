const btn= document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    e.target.innerHTML = "click"
} )

const handleClick = () =>{
    console.log("test ...")
}

console.log("test ...", btn)
