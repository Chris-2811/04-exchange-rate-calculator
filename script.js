const currency_oneEl = document.getElementById('currency-one')
const currency_twoEl = document.getElementById('currency-two')
const amount_oneEl = document.getElementById('amount-one')
const amount_twoEl = document.getElementById('amount-two')
const swap = document.getElementById('swap')
const rateEl = document.getElementById('rate')

function calculate() {
  const currency_one = currency_oneEl.value
  const currency_two = currency_twoEl.value

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[currency_two]

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

      amount_twoEl.value = (rate * amount_oneEl.value).toFixed(2)
    })
}

function swapRates() {
  let temp = currency_oneEl.value
  currency_oneEl.value = currency_twoEl.value
  currency_twoEl.value = temp
  calculate();
}

// Add Eventlistener
currency_oneEl.addEventListener('change', calculate)
currency_twoEl.addEventListener('change', calculate)
amount_oneEl.addEventListener('change', calculate)
amount_twoEl.addEventListener('change', calculate)
swap.addEventListener('click', swapRates)


calculate()