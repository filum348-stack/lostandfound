let items = [];

const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener("click", uploadItem);

function uploadItem() {
    const name = document.getElementById("name").value.trim();
    const type = document.getElementById("type").value;
    const contact = document.getElementById("contact").value.trim();
    const fileInput = document.getElementById("photo");
    const file = fileInput.files[0];

    if (!name || !contact || !file) {
        alert("Please fill all fields.");
        return;
    }

    const photoURL = URL.createObjectURL(file);

    items.push({
        name,
        type,
        contact,
        photo: photoURL
    });

    alert(`${type} item uploaded successfully!`);

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    fileInput.value = "";

    displayItems();
}

function displayItems() {
    const container = document.getElementById("items");
    container.innerHTML = "";

    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "box";

        card.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.photo}">
            <p><strong>Type:</strong> ${item.type}</p>
            <p><strong>Contact:</strong> ${item.contact}</p>
            <button onclick="removeItem(${index})">
                Owner Confirmed
            </button>
        `;

        container.appendChild(card);
    });
}

function removeItem(index) {
    items.splice(index, 1);
    alert("Item removed successfully!");
    displayItems();
}
