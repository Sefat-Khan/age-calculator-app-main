
function calculateAge() {
    const dayInput = document.getElementById('dayInput').value;
    const monthInput = document.getElementById('monthInput').value;
    const yearInput = document.getElementById('yearInput').value;
    const errorDay = document.getElementById('errorDay');
    const errorMonth = document.getElementById('errorMonth');
    let isValid = true;


    if((dayInput >= 32) || (monthInput >= 13) || !dayInput.trim() || !monthInput.trim()){
        errorDay.innerHTML = 'Please enter a valid day (1-31) and month (1-12)';
        errorMonth.innerHTML = 'Please enter a valid day (1-31) and month (1-12)';
        isValid = false;
    }else{
        errorDay.innerHTML = "";
        errorMonth.innerHTML = "";
    }
    if(!dayInput.trim() || !monthInput.trim()) {
        isValid = false;
        errorDay.innerHTML = 'This field is required';
        errorMonth.innerHTML = 'This field is required';
    }

    if(isValid){
    // Assuming the current date is today
    
    const currentDate = new Date();
    const birthDate = new Date(yearInput, monthInput - 1, dayInput);

    
    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44; // Average days in a month
    const ageInYears = ageInDays / 365.25; // Average days in a year

    document.getElementById('yearsResult').innerText = Math.floor(ageInYears);
    document.getElementById('monthsResult').innerText = Math.floor(ageInMonths % 12);
    document.getElementById('daysResult').innerText = Math.floor(ageInDays % 30.44);
  }
}