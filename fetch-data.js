async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    
    try {
        
        dataContainer.innerHTML = 'Loading user data...'; 

        // Fetch data
        const response = await fetch(apiUrl);
        if (!response.ok) { 
            throw new Error('Network response was not ok'); 
        }
        const users = await response.json(); 

        
        dataContainer.innerHTML = ''; 

        
        const userList = document.createElement('ul'); 
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

        
        dataContainer.appendChild(userList); 

    } catch (error) {
        
        console.error('Failed to fetch user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.'; 
    }
}


document.addEventListener('DOMContentLoaded', fetchUserData);
