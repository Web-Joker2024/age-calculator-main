// var myDate = new Date("2018-01-22T13:00:00")
//  var month = myDate.getDate()
// console.log(month)
// let valueDays = document.getElementById('days');
//     let valueMonths = document.getElementById('months');
//     let valueYears = document.getElementById('years');



document.querySelector(".btn-enter").addEventListener("click",function(){
    // const presentYear = Number(prompt('What is the current year'));
    // const presentMonth =Number(prompt('What is the current month'));
    // const presentDay = Number(prompt('What is the current date'));
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();

    let valueDays = document.getElementById('days');
    let valueMonths = document.getElementById('months');
    let valueYears = document.getElementById('years');
    let titleDays = document.querySelector('.days')
    let titleMonths = document.querySelector('.months')
    let titleYears = document.querySelector('.years')
    let errorDays = document.querySelector('.invalid_days');
    let errorMonths = document.querySelector('.invalid_months');
    let errorYears = document.querySelector('.invalid_years');
    const days = Number(valueDays.value)
    const months = Number(valueMonths.value)
    const years = Number(valueYears.value)
    let ageYears = document.getElementById("age_years");
    let ageMonths = document.getElementById("age_months");
    let ageDays = document.getElementById("age_days");
// console.log(year)
    //  console.log(presentDay,presentMonth,presentYear)
    
     // console.log(valueDays.length)
     if (valueDays.value.length == 0) {
         errorDays.classList.remove('hidden')
         valueDays.classList.add('border_invalid');
         titleDays.classList.add("subject_invalid")
        }else if (valueDays.value.length >= 1) {
            errorDays.classList.add('hidden')
            valueDays.classList.remove('border_invalid');
            titleDays.classList.remove("subject_invalid")
}
if (valueMonths.value.length == 0) {
    errorMonths.classList.remove('hidden')
    valueMonths.classList.add('border_invalid');
    titleMonths.classList.add("subject_invalid");
}else if (valueMonths.value.length >= 1) {
    errorMonths.classList.add('hidden')
    valueMonths.classList.remove('border_invalid');
    titleMonths.classList.remove("subject_invalid");
    
}
if (valueYears.value.length == 0) {
    errorYears.classList.remove('hidden')
    valueYears.classList.add('border_invalid');
    titleYears.classList.add("subject_invalid");
}else if (valueYears.value.length >= 1) {
    errorYears.classList.add('hidden')
    valueYears.classList.remove('border_invalid');
    titleYears.classList.remove("subject_invalid");

}

if (days > 31) {
    errorDays.classList.remove('hidden')
    errorDays.textContent = 'Must be a valid day';
    valueDays.classList.add('border_invalid');
    titleDays.classList.add("subject_invalid");

}
if (months > 12 ) {
    errorMonths.classList.remove('hidden')
    errorMonths.textContent = 'Must be a valid month';
    valueMonths.classList.add('border_invalid');
    titleMonths.classList.add("subject_invalid");

}
if (years >= currentYear) {
    errorYears.classList.remove('hidden')
    errorYears.textContent = 'Must be in the past';
    valueYears.classList.add('border_invalid');
    titleYears.classList.add("subject_invalid");

}
const miscellaneous = function() {
    errorDays.classList.remove('hidden')
    errorDays.textContent = 'Must be a valid date';
    valueDays.classList.add('border_invalid');
    titleDays.classList.add("subject_invalid");
    valueMonths.classList.add('border_invalid');
    titleMonths.classList.add("subject_invalid");
    valueYears.classList.add('border_invalid');
    titleYears.classList.add("subject_invalid");
}



if ((months == 4||6||9||11) && days >= 31) {
    miscellaneous()

}
if (months == 2 && days > 29) {
    miscellaneous()
}
const date = function () {
    const finalYear = currentYear - years - 1;
    if (currentMonth > months) {
        ageMonths.textContent = 12-Math.abs(currentMonth-months)
        ageYears.textContent = finalYear + 1
    }
    if(months > currentMonth){
        ageMonths.textContent = Math.abs(months-currentMonth)
        ageYears.textContent = finalYear 
    }
    if (currentDay > days) {
        ageDays.textContent = Math.abs(currentDay-days)
    }
    if (currentDay < days) {
        ageDays.textContent = Math.abs(days-currentDay)
    }
}
date()
if (!(errorDays.classList.contains('hidden'))|| !(errorMonths.classList.contains('hidden'))||!(errorYears.classList.contains('hidden'))) {
    ageDays.textContent = "- -"
    ageMonths.textContent = "- -"
    ageYears.textContent = "- -"
}
});
