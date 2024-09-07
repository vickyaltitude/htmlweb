document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const amountInput = document.getElementById("amount");
    const descriptionInput = document.getElementById("description");
    const categorySelect = document.getElementById("selectType");

    const expenseList = document.createElement("ul");
    document.body.appendChild(expenseList);

   
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const amount = amountInput.value;
        const description = descriptionInput.value;
        const category = categorySelect.value;

        const expenseItem = document.createElement("li");
        expenseItem.textContent = `Amount: ₹${amount}, Description: ${description}, Category: ${category} `;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            expenseList.removeChild(expenseItem);
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            amountInput.value = amount;
            descriptionInput.value = description;
            categorySelect.value = category;
            expenseList.removeChild(expenseItem);
        });

        expenseItem.appendChild(editBtn);
        expenseItem.appendChild(deleteBtn);

        expenseList.appendChild(expenseItem);

        amountInput.value = "";
        descriptionInput.value = "";
        categorySelect.value = "Movies";
    });
});
