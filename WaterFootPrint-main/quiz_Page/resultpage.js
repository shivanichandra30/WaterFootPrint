document.addEventListener('DOMContentLoaded', function() {
    // Retrieve individual question counts from session storage
    const count1 = parseInt(sessionStorage.getItem('count1')) || 0;
    const count2 = parseInt(sessionStorage.getItem('count2')) || 0;
    const count3 = parseInt(sessionStorage.getItem('count3')) || 0;

    // Calculate the total count by adding counts from all questions
    const totalCount = count1 + count2 + count3;

    // Update the countSpan element with the total count
    const countSpan = document.getElementById('countSpan');
    if (countSpan) {
        countSpan.textContent = totalCount;
    }
    sessionStorage.removeItem('count1');
    sessionStorage.removeItem('count2');
    sessionStorage.removeItem('count3');

});
