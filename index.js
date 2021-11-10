//1
var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = 'dave'

//2
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

//3
function setBestCustomer() {
    //var bestCustomer;
    return bestCustomer = "not bob";
}

//4
function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

//5
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'dan';
}
console.log(changeLeastFavoriteCustomer());