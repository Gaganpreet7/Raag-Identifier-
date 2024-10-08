// Event listener for form submission
document.getElementById('raag-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Get the input notation and convert it to lowercase for case-insensitivity
    const notation = document.getElementById('notation').value.toLowerCase().trim();

    // Basic validation: Ensure that the input is not empty
    if (!notation) {
        document.getElementById('result').innerText = 'Please enter a valid notation.';
        return;
    }

    // Raag identification dictionary with notations and corresponding Raag names
    const raagDictionary = {
        'sa re ga ma': 'Raag Yaman',
        'sa ga pa dha': 'Raag Bhairav',
        'sa re ma pa ni sa': 'Raag Hamsadhwani',
        'pa dha ni sa': 'Raag Durga',
        'sa re ga ma pa dha ni': 'Raag Kafi',
        're ga ma dha ni sa': 'Raag Bhimpalasi',
        'sa re ga ma pa dha ni sa': 'Raag Bilawal',
        'sa re ga ma dha ni sa': 'Raag Bhupali',
        // Add more notations and Raags as needed
    };

    // Identify the Raag based on the entered notation
    const identifiedRaag = raagDictionary[notation] || 'Unknown Raag';

    // Display the result in the result paragraph
    document.getElementById('result').innerText = `Identified Raag: ${identifiedRaag}`;
});
