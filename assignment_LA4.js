// Initialize the customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function displayQueue() {
    if (customerQueue.length === 0) {
        console.log("The queue is empty.");
        return;
    }
    console.log("Current Queue:");
    customerQueue.forEach((customer, index) => {
        console.log(`${index + 1}. ${customer}`);
    });
}

function addCustomer() {
    const newCustomer = prompt("Enter the name of the customer to add:");
    if (newCustomer && newCustomer.trim()) {
        customerQueue.push(newCustomer.trim());
        alert(`${newCustomer.trim()} added to the queue.`);
        displayQueue();
    } else {
        alert("No customer added. Please enter a valid name.");
    }
}

function serveCustomer() {
    if (customerQueue.length === 0) {
        alert("No customers in the queue to serve.");
        return;
    }
    displayQueue();
    const serviceNumber = parseInt(prompt("Enter the number of the customer to be served:"));

    if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > customerQueue.length) {
        alert("Invalid service number. Please enter a valid number within the queue.");
        return;
    }

    const servedCustomer = customerQueue.splice(serviceNumber - 1, 1)[0];
    alert(`${servedCustomer} has been served.`);
    displayQueue();
}

function main() {
    displayQueue();

    while (true) {
        const action = prompt("Choose an action:\n1. Add Customer\n2. Serve Customer\n3. Exit");

        switch (action) {
            case "1":
                addCustomer();
                break;
            case "2":
                serveCustomer();
                break;
            case "3":
                alert("Exiting program.");
                return;
            default:
                alert("Invalid action. Please choose 1, 2, or 3.");
        }
    }
}

main();