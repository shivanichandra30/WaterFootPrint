function handleQuestionAnswer(answer) {
    let count = sessionStorage.getItem('count3') || 0; // Use 'count3' for question 3
    // Calculate the count based on the selected answer and add it to the current count
    if (answer === 'Once') {
        count += 100;
    } else if (answer === 'Twice') {
        count += 200;
    } else if (answer === 'Thrice') {
        count += 300;
    } else if (answer === 'More than Thrice') {
        count += 500;
    }

    // Store the updated count in session storage for question 3
    sessionStorage.setItem('count3', count);

    // Redirect to the result page after answering the last question
    window.location.href = 'resultpage.html'; // Redirect to the result page
}
