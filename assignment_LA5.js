// Simple hash table with basic add and serve operations

// Basic hash function
function hash(name, size) {
    let h = 0;
    for (let ch of name) h = (h + ch.charCodeAt(0)) % size;
    return h;
}

// Hash table setup
const SIZE = 7;
const table = Array.from({length: SIZE}, () => []);
["Elaine", "Althea", "Angelo", "Lito", "Engelbert"].forEach(name => {
    table[hash(name, SIZE)].push(name);
});

function show() {
    for (let i = 0; i < SIZE; i++) {
        console.log(`${i+1}: ${table[i].length ? table[i].join(", ") : "Empty"}`);
    }
}

function add() {
    const name = prompt("Customer name to add:");
    if (!name) return;
    table[hash(name, SIZE)].push(name);
    console.log(`${name} added.`);
    show();
}

function serve() {
    const num = +prompt("Table number to serve (1-7):");
    if (num < 1 || num > SIZE) return alert("Invalid number.");
    const cust = table[num-1].shift();
    alert(cust ? `${cust} served.` : "No customer.");
    show();
}

// Main loop
show();
while (true) {
    const a = prompt("1. Add  2. Serve  3. Exit");
    if (a === "1") add();
    else if (a === "2") serve();
    else if (a === "3") break;
    else alert("Invalid.");
}