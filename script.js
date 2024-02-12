function handleSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foods = Array.from(
    document.getElementById("foods").selectedOptions
  ).map((option) => option.value);
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  if (
    !firstName ||
    !lastName ||
    !address ||
    !pincode ||
    !gender ||
    foods.length !== 2 ||
    !state ||
    !country
  ) {
    alert(`Please fill all the required details`);
    return;
  }

  const tableBody = document.querySelector(".body");

  const newRow = document.createElement("tr");
  newRow.className = "row-item";

  newRow.innerHTML = `
  <td class="body-items">${firstName}</td>
  <td class="body-items">${lastName}</td>
  <td class="body-items">${address}</td>
  <td class="body-items">${pincode}</td>
  <td class="body-items">${gender}</td>
  <td class="body-items">${foods.join(", ")}</td>
  <td class="body-items">${state}</td>
  <td class="body-items">${country}</td>
`;

  tableBody.appendChild(newRow);

  document.querySelector(".user-form").reset();
}

const submitButton = document.querySelector(".btn-primary");
const resetButton = document.querySelector(".btn-reset");

submitButton.addEventListener("click", handleSubmit);

resetButton.addEventListener("click", () => {
  document.querySelector(".user-form").reset();
});
