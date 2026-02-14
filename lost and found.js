let items = [];

function uploadItem() {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const file = document.getElementById("photo").files[0];

    if (!name || !file) {
        alert("Please fill all fields");
        return;
    }

    // Simulate photo URL (for demo)
    const photoURL = URL.createObjectURL(file);

    // Add item to local array
    items.push({ name, type, photo: photoURL });

    // Show alert
    if (type === "Lost") {
        alert("⚠️ Lost Item Reported Successfully!");
    } else {
        alert("✅ Found Item Uploaded Successfully!");
    }

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("photo").value = "";

    // Display items
    displayItems();
}

function displayItems() {
    const container = document.getElementById("items");
    container.innerHTML = "";

    items.forEach((item, index) => {
        container.innerHTML += `
            <div class="box">
                <h3>${item.name}</h3>
                <img src="${item.photo}">
                <p>${item.type}</p>
                <button onclick="removeItem(${index})">
                    Owner Confirmed
                </button>
            </div>
        `;
    });
}

function removeItem(index) {
    items.splice(index, 1);
    alert("Item removed successfully!");
    displayItems();
}
