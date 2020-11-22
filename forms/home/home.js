   function homeLoanPayment15(p, r) {
   return (p*(r*((1+r)**180))/(((1+r)**180)-1))
 }
    function homeLoanPayment30(p, r) {
   return (p*(r*((1+r)**360))/(((1+r)**360)-1))
 }

 
btn15.onclick=function calcHomeLoanPayment15() {
  let principleValue = inptPrinciple2.value
  let monthlyInterest = inptMonthlyInterest2.value
  let homePayment =  homeLoanPayment15(Number(principleValue),Number(monthlyInterest)/100)
  lblResult2.hidden = false
  lblResult2.textContent = ("A home loan for $" + principleValue + " over 15 years at " + monthlyInterest +
  "% interest would have a monthly payment of $" + homePayment)
}


 btn30.onclick=function calcHomeLoanPayment30(){
  let principleValue = inptPrinciple2.value
  let monthlyInterest = inptMonthlyInterest2.value
  let homePayment =  homeLoanPayment30(Number(principleValue),Number(monthlyInterest)/100)
  lblResult2.hidden = false
  lblResult2.textContent = ("A home loan for $" + principleValue + " over 30 years at " + monthlyInterest +
  "% interest would have a monthly payment of $" + homePayment)
}


 btnBackCar.onclick=function(){
  ChangeForm(homePage)
}