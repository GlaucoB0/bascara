function bask(){
        
    let A = document.getElementById("nA").value;
    let B = document.getElementById("nB").value;
    let C = document.getElementById("nC").value;
    let delta = (B**2)-4 * A * C   
    console.log(`${A} ${B} ${C}`)

    

    let x1 = ((-B) + (Math.sqrt(delta))) /(2*A)
    let x2 = ((-B) - (Math.sqrt(delta))) /(2*A)
    
    
    let res = document.getElementById("res")
    res.innerText = `x' = ${x1} \nx" = ${x2} \n△ = ${delta}`

}