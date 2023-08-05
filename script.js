document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var title = document.getElementById('jobTitle').value;
    var description = document.getElementById('jobDescription').value;
    var location = document.getElementById('jobLocation').value;
    
    var jobData = {
        title: title,
        description: description,
        location: location
    };
    
    fetch('API_URL', {
        method: 'POST',
        body: JSON.stringify(jobData),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.status);
        }
    }).then(function(data) {
        console.log('Job posted with ID: ' + data.id);
    }).catch(function(error) {
        console.log('Error: ' + error.message);
    });
});
