/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Initialize variables
const dayButtons = document.querySelectorAll(".day-selector .blue-hover");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCostElement = document.getElementById("calculated-cost");

let selectedDays = new Set();
let dailyRate = 35;
let totalCost = 0;

// Function to recalculate and update the total cost
function calculateCost() {
  totalCost = selectedDays.size * dailyRate;
  calculatedCostElement.innerHTML = totalCost;
}

// Handle day button clicks
dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dayId = button.id;

    if (selectedDays.has(dayId)) {
      selectedDays.delete(dayId);
      button.classList.remove("clicked");
    } else {
      selectedDays.add(dayId);
      button.classList.add("clicked");
    }

    calculateCost();
  });
});

// Handle full-day button click
fullDayButton.addEventListener("click", () => {
  dailyRate = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateCost();
});

// Handle half-day button click
halfDayButton.addEventListener("click", () => {
  dailyRate = 20;
  fullDayButton.classList.remove("clicked");
  halfDayButton.classList.add("clicked");
  calculateCost();
});

// Handle clear days button click
clearButton.addEventListener("click", () => {
  selectedDays.clear();
  dayButtons.forEach((button) => button.classList.remove("clicked"));
  totalCost = 0;
  calculatedCostElement.innerHTML = totalCost;
});
