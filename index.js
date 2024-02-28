let cars_prices = [4000, 90000, 20000, 14000, 7000, 30000, 18000, 45000, 36000]

let from = prompt('summa ot')
let to = prompt('summa do')

let prices = cars_prices.filter((price) => price >= from && price <= to).sort((a, b) => a - b)
console.log(prices);