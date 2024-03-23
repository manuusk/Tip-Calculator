
const bill = document.getElementById("billTotalInput");
const tip = document.getElementById("tipInput");
const people = document.getElementById("numberOfPeople");
const perHead = document.getElementById("perPersonTotal");

let count = Number(people.innerText)
let cost 
let tipCost 
let total
let perPersonTotal

const calculateBill = () => {

    cost = Number(bill.value)

    tipCost = (Number(tip.value)/100 )*cost;
 
    total = cost+tipCost;
  
    perPersonTotal = total/count;
  
    
    perHead.innerText = `₹${perPersonTotal.toFixed(2)}`
  
  }
  
  const increasePeople = () => {
    
     people.innerText = Number(people.innerText)+1;

     let dummy = Number(total)/Number(people.innerText)
     
     perHead.innerText = `₹${dummy.toFixed(2)}`
  }
  
  const decreasePeople = () => {
    let ppl =  Number(people.innerText)-1
    if (ppl<1)
    return;
    people.innerText = Number(people.innerText)-1;
    
   let dummy = Number(total)/Number(people.innerText)

    perHead.innerText = `₹${dummy.toFixed(2)}`
  }