
const userinput=document.getElementById("userinput")
const maincontainerlower=document.getElementById("maincontainerlower")

async function search() {
    maincontainerlower.innerHTML=""
    const response=await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userinput.value}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data=await response.json()
    console.log(data);
    maincontainerlower.innerHTML=`
    <p>${data[0].shortdef[0]}</p>`
}
const btn=document.getElementById("btn")
btn.addEventListener("click",search)