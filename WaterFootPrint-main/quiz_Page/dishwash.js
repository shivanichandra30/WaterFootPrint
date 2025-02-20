function handleQuestionAnswer(answer) {
    let count = sessionStorage.getItem('count2') || 0; // Use 'count2' for question 2
    // Calculate the count based on the selected answer and add it to the current count
    if (answer === 'Once') {
        count += 180;
    } else if (answer === 'Twice') {
        count += 360;
    } else if (answer === 'Thrice') {
        count += 540;
    } else if (answer === 'More than Thrice') {
        count += 1000;
    }

    // Store the updated count in session storage for question 2
    sessionStorage.setItem('count2', count);

    // Redirect to the next question page or result page
    window.location.href = 'question3.html'; // Redirect to the next question page (e.g., question 3)
}
