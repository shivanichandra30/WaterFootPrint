function handleQuestionAnswer(answer) {
    let count = sessionStorage.getItem('count1') || 0; // Use 'count1' for question 1
    // Calculate the count based on the selected answer and add it to the current count
    if (answer === 'Once') {
        count += 135;
    } else if (answer === 'Twice') {
        count += 270;
    } else if (answer === 'Thrice') {
        count += 405;
    } else if (answer === 'More than Thrice') {
        count += 700;
    }

    // Store the updated count in session storage for question 1
    sessionStorage.setItem('count1', count);

    // Redirect to the next question page or result page
    window.location.href = 'question2.html'; // Redirect to the next question page (e.g., question 2)
}
