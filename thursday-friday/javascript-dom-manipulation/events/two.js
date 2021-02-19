// Bad way...
/*

document.querySelector("#a").addEventListener("click", (el) => {
    let target = el.target
    console.log("Hi from #" + target.id)
})

document.querySelector("#b").addEventListener("click", (el) => {
    let target = el.target
    console.log("Hi from #" + target.id)
})

*/

//Better way..
document.querySelector("#outer").addEventListener("click", (el) => {
    let target = el.target
    if(target.id == "outer") 
        return

    console.log("Hi from #" + target.id)
    document.querySelector("#logger").innerText = "Hi from #" + target.id
})