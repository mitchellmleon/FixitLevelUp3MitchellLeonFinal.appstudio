function carLoanPayment(p, r, n) {
  return (p * (r*((1+r)**n))/(((1+r)**n)-1))
}

btnCalcCar.onclick=function calcCarLoanPayment() {
  let principleValue = inptPrinciple.value
  let monthlyInterest = inptMonthlyInterest.value
  let totalMonths = inptTotalMonths.value
  let carPayment =  carLoanPayment(Number(principleValue),Number(monthlyInterest)/100,Number(totalMonths))
  lblResult.hidden = false
  lblResult.textContent = ("A car loan for $" + principleValue + " over " + totalMonths + " months at " + monthlyInterest +
  "% interest would have a monthly payment of " + carPayment)
}

btnBackHome.onclick=function(){
  ChangeForm(homePage)
}