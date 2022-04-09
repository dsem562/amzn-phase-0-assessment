// 1. Write your functions here

function line (customers) {
  const currentCustomers = []
    if (customers.length === 0) {
        return console.log("The line is currently empty")
    } else if (customers.length > 0) {
        for (i = 0; i < customers.length; i++) {
            currentCustomers.push(`${[i + 1]}. ${customers[i]} `);
        }
        return console.log(`The line is currently: ${currentCustomers.join('')}`)
    }
}

function takeANumber (currentCustomers = katzDeli, newCustomerStr) {
    currentCustomers.push(newCustomerStr);
    return console.log(`Welcome, ${newCustomerStr}. You are number ${currentCustomers.indexOf(newCustomerStr) + 1} in line.`)
  }

  function nowServing (restaurant) {
    if (restaurant.length === 0) {
        return console.log("There is nobody waiting to be served!")
    } else if (restaurant.length > 0) {
        return console.log (`Currently serving ${restaurant.shift()}.`)
    }
  }


// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"