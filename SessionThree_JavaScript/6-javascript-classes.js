
/*
function Customer() {
    this.id = 1001;
    this.name = "James Bond";
    this.age = 23;
    this.display = () => {
        console.log(`Customer Id : ${this.id}`);
        console.log(`Customer Name : ${this.name}`);
        console.log(`Customer Age : ${this.age}`);
    }
}

var customer1 = new Customer();
customer1.display();
var customer2 = new Customer();
customer2.display();
*/

function Customer(id, name, age) {
    this.id = id || 1001;
    this.name = name || 'Unknown';
    this.age = age || 18;
    this.display = () => {
        console.log(`Customer Id : ${this.id}`);
        console.log(`Customer Name : ${this.name}`);
        console.log(`Customer Age : ${this.age}`);
    }
}

var customer1 = new Customer(101, 'James', 34);
customer1.display();
var customer2 = new Customer(102, 'Bond', 45);
customer2.display();

