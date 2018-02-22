let customerId = 0
let deliveryId = 0
let mealId = 0
let employerId =0
let store = {customers: [], deliveries: [], meals: [], employers: []}
class Customer{
  constructor(name, employerId){
    this.name = name
    this.employerId = employerId
    this.id = ++customerId
    store.customers.push(this)
  }
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id
    })
  }
  meals(){
    let deliv = this.deliveries()
    let newArr = []
    deliv.forEach(function(del){
      newArr.push(del.meal())
    })
    return newArr
  }
  totalSpent(){
    let meals = this.meals()
    let total = 0
    meals.forEach(function(meal){
      total +=meal.price
    })
    return total
  }
}
class Meal{
  constructor(title, price){
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)

  }
  deliveries(){
    return store.deliveries.filter(delivery =>{
      return delivery.mealId === this.id
    })
  }
  customers(){
    let deliveries = this.deliveries()
    let newArr = []
    deliveries.forEach(function(delivery){
      newArr.push(delivery.customer())
    })
    return newArr
  }
  byPrice(){
    let mealArray = store.meals()
    return mealArray
  }


}

class Employer{

  constructor(name){
    this.id = ++employerId
    this.name = name
    store.employers.push(this)

  }
  employees(){
    return store.customers.filter(customer => {
      return customer.employerId.id === this.id
    })

  }

  deliveries(){
    let newArr = []
    let employees = this.employees()
    console.log(employees)
    employees.forEach(function(employee){
      newArr.push(employee.deliveries)
    })
    return newArr
  }
}

class Delivery{
  constructor(meal, customer){
    this.id = ++deliveryId
    if(meal){
      this.mealId = meal.id
    }
    if(customer){
      this.customerId = customer.id
    }
    store.deliveries.push(this)
  }

  customer(){
    return store.customers.find(customer => {
      return customer.id === this.customerId
    })
  }
  meal(){
    return store.meals.find(meal => {
      return meal.id === this.mealId
    })
  }
}
