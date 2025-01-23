// dashboard.js

// Function to create a dashboard index
function createDashboardIndex() {
    const dashboard = document.createElement('div');
    dashboard.id = 'dashboard';

    const header = document.createElement('h1');
    header.textContent = 'Dashboard';
    dashboard.appendChild(header);

    const content = document.createElement('div');
    content.id = 'content';
    dashboard.appendChild(content);

    document.body.appendChild(dashboard);
}

// Call the function to create the dashboard index
createDashboardIndex();