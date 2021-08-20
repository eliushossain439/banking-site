// deposite amount
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')
    const depositAmount = document.getElementById('deposit-amount')
    const depositValue = parseFloat(depositInput.value)
    const previousAmout = parseFloat(depositAmount.innerText)
    const curentAmount = previousAmout + depositValue
    depositAmount.innerText = curentAmount
    // totap deposite amount
    const totalDeposit = document.getElementById('total-deposit')
    const prevTotalDeposit = parseFloat(totalDeposit.innerText)
    const newDeposit = prevTotalDeposit + depositValue
    totalDeposit.innerText = newDeposit

    // for input field khali
    depositInput.value = ''

})

// withdraw amount
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawValue = parseFloat(withdrawInput.value)
    const withdrawText = parseFloat(withdrawAmount.innerText)
    const totalWithdraw = withdrawText + withdrawValue
    withdrawAmount.innerText = totalWithdraw
    // total deposit after withdraw
    const totalDepositAmount = document.getElementById('total-deposit')
    const totalDepositAmountText = parseFloat(totalDepositAmount.innerText)
    totalDepositAmount.innerText = totalDepositAmountText - withdrawValue

    // for input field khali
    withdrawInput.value = ''



})