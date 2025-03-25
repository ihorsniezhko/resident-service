// Get references to DOM elements
const callButton = document.getElementById('callButton');
const walkerIcon = document.getElementById('walkerIcon');
const toolsButton = document.getElementById('toolsButton');

// Event listeners (empty handlers for now for click events)
callButton.addEventListener('click', handleCall);
toolsButton.addEventListener('click', handleToolsPacked);

// Placeholder functions
function handleCall() {
        console.log('Call button clicked'); // Debugging
        toolsButton.disabled = false; // Enable tools button
        // Placeholder: Simulate repair type selection
        const repairTypes = ['general', 'electrical', 'plumbing'];
        const repairType = repairTypes[Math.floor(Math.random() * repairTypes.length)];
        console.log('Repair type:', repairType);
}

function handleToolsPacked() {
        console.log('Tools packed button clicked'); // Debugging
        walkerIcon.classList.add('fa-person-walking-arrow-right');
        walkerIcon.classList.remove('fa-person-walking-arrow-loop-left');
        toolsButton.disabled = true;
}
