// Initialize IndexedDB
const dbName = "AttendanceSystemDB";
const dbVersion = 1;
let db;

const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("admins")) {
        const adminStore = db.createObjectStore("admins", { keyPath: "username" });
        adminStore.transaction.oncomplete = function () {
            const adminObjectStore = db.transaction("admins", "readwrite").objectStore("admins");
            adminObjectStore.add({ username: "admin", password: "12345" }); // Default Admin
        };
    }
};

request.onsuccess = function (event) {
    db = event.target.result;
};

request.onerror = function () {
    console.error("IndexedDB initialization failed");
};

// Admin Login Function
function loginAdmin(event) {
    event.preventDefault();
    
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    const transaction = db.transaction("admins", "readonly");
    const store = transaction.objectStore("admins");
    const getRequest = store.get(username);

    getRequest.onsuccess = function () {
        if (getRequest.result && getRequest.result.password === password) {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to admin page
        } else {
            alert("Invalid Username or Password");
        }
    };

    getRequest.onerror = function () {
        alert("Error retrieving admin data");
    };
}
