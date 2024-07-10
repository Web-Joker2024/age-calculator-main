// Function to validate input dates
function isValidDate(day, month, year) {
    if (year < 1900 || year > new Date().getFullYear()) return false; // Year must be between 1900 and the current year
    if (month < 1 || month > 12) return false; // Month must be between 1 and 12
    if (day < 1 || day > 31) return false; // Day must be between 1 and 31
    if (month === 2 && day > 29) return false; // February cannot have more than 29 days
    if ([4, 6, 9, 11].includes(month) && day > 30) return false; // April, June, September, and November cannot have more than 30 days
    return true;
}

// Function to calculate age
function calculateAge(birthDate, currentDate) {
// Convert both dates to milliseconds
let birthTime = birthDate.getTime();
let currentTime = currentDate.getTime();

// Calculate the difference in milliseconds
let timeDifference = currentTime - birthTime;
console.log(timeDifference)
// Convert milliseconds to days
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(daysDifference)
// Calculate years, months, and days
let years = Math.floor(daysDifference / 365.25);
daysDifference -= years * 365.25;
console.log(years);
console.log(daysDifference)
let months = Math.floor(daysDifference / 30.4375);
daysDifference -= months * 30.4375;
console.log(daysDifference)
let days = Math.round(daysDifference);

// Adjust if days exceed the days in the month
if (days >= 30) {
    months += 1;
    days -= 30;
}

if (months >= 12) {
    years += 1;
    months -= 12;
}

return { years: years, months: months, days: days };
}

// Function to show error messages
function showError(element, errorElement, message) {
    errorElement.classList.remove('hidden'); // Show error message
    errorElement.textContent = message; // Set error message text
    element.classList.add('border_invalid'); // Add error styling to the input element
}

// Function to hide error messages
function hideError(element, errorElement) {
    errorElement.classList.add('hidden'); // Hide error message
    element.classList.remove('border_invalid'); // Remove error styling from the input element
}

document.querySelector(".btn-enter").addEventListener("click", function () {
    const currentDate = new Date(); // Get current date
    let valueDays = document.getElementById('days'); // Get day input element
    let valueMonths = document.getElementById('months'); // Get month input element
    let valueYears = document.getElementById('years'); // Get year input element
    let errorDays = document.querySelector('.invalid_days'); // Get day error message element
    let errorMonths = document.querySelector('.invalid_months'); // Get month error message element
    let errorYears = document.querySelector('.invalid_years'); // Get year error message element
    const days = Number(valueDays.value); // Get day value
    const months = Number(valueMonths.value); // Get month value
    const years = Number(valueYears.value); // Get year value
    let ageYears = document.getElementById("age_years"); // Get element to display age years
    let ageMonths = document.getElementById("age_months"); // Get element to display age months
    let ageDays = document.getElementById("age_days"); // Get element to display age days

    // Input validation
    if (valueDays.value.length == 0) {
        showError(valueDays, errorDays, 'This field is required'); // Show error if day is empty
    } else {
        hideError(valueDays, errorDays); // Hide error if day is valid
    }

    if (valueMonths.value.length == 0) {
        showError(valueMonths, errorMonths, 'This field is required'); // Show error if month is empty
    } else {
        hideError(valueMonths, errorMonths); // Hide error if month is valid
    }

    if (valueYears.value.length == 0) {
        showError(valueYears, errorYears, 'This field is required'); // Show error if year is empty
    } else {
        hideError(valueYears, errorYears); // Hide error if year is valid
    }

    if (!isValidDate(days, months, years)) {
        showError(valueDays, errorDays, 'Must be a valid date'); // Show error if date is invalid
        showError(valueMonths, errorMonths, 'Must be a valid month'); // Show error if month is invalid
        showError(valueYears, errorYears, 'Must be a valid year'); // Show error if year is invalid
        return;
    } else {
        hideError(valueDays, errorDays); // Hide error if date is valid
        hideError(valueMonths, errorMonths); // Hide error if month is valid
        hideError(valueYears, errorYears); // Hide error if year is valid
    }

    // Calculate age
    const birthDate = new Date(years, months - 1, days); // Create birth date object
    console.log(birthDate)
    const age = calculateAge(birthDate, currentDate); // Calculate age

    // Display age
    ageYears.textContent = age.years; // Display years
    ageMonths.textContent = age.months; // Display months
    ageDays.textContent = age.days; // Display days
});
