import requests

headers = {
    'Auth': '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'
}

url = 'https://api.github.com/andres95monsalve'

response = requests.get(url, headers=headers)
data = response.json()

print(data)


const axios = require('axios');

async function getGitHubData(owner, repo, job_id) {
  try {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/actions/jobs/${job_id}`;
    
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from GitHub:', error.message);
    return null;
  }
}

// Reemplaza 'OWNER', 'REPO' y 'JOB_ID' con los valores reales de tu repositorio y trabajo (job).
const owner = 'OWNER';
const repo = 'REPO';
const job_id = 'JOB_ID';

getGitHubData(owner, repo, job_id)
  .then(data => {
    if (data) {
      console.log(data);
    } else {
      console.log('No se pudieron obtener los datos.');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
