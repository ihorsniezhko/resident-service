// Get references to DOM elements
const callButton = document.getElementById("callButton"); // Call button
const walkerIcon = document.getElementById("walkerIcon"); // Walker icon
const toolsButton = document.getElementById("toolsButton"); // Tools button
const toolsContainer = document.getElementById("toolsContainer"); // Container for tool images
const repairTypeSpan = document.getElementById("repairTypeSpan"); // Type repair

// Get the count elements - these will display the number of each type of repair
const generalCountEl = document.getElementById("generalCount");
const electricalCountEl = document.getElementById("electricalCount");
const plumbingCountEl = document.getElementById("plumbingCount");

// Initialize counts - start all repair counts at 0
let generalCount = 0;
let electricalCount = 0;
let plumbingCount = 0;

let currentRepairType = null; // Variable to store the type of the current repair
// Object containing arrays of tools for each repair type
const tools = {
  general: [
    { src: "assets/img/universal-toolbox-general.webp", alt: "Toolbox" },
    { src: "assets/img/angle-grinder-general.webp", alt: "Angle Grinder" },
    { src: "assets/img/laser-measurer-general.webp", alt: "Laser Measurer" },
    { src: "assets/img/stepladder-general.webp", alt: "Stepladder" },
    { src: "assets/img/laser-level-general.webp", alt: "Laser Level" },
    { src: "assets/img/trowel-set-general.webp", alt: "Trowel Set" },
    {
      src: "assets/img/protective-gloves-general.webp",
      alt: "Protective Gloves",
    },
  ],
  electrical: [
    { src: "assets/img/repairman-box-general.webp", alt: "Repairman Box" },
    { src: "assets/img/multimeter-electrical.webp", alt: "Multimeter" },
    { src: "assets/img/wire-strippers-electrical.webp", alt: "Wire Strippers" },
    { src: "assets/img/contact-set-electrical.webp", alt: "Contact Set" },
    { src: "assets/img/soldering-iron-electrical.webp", alt: "Soldering Iron" },
    { src: "assets/img/duct-tape-elecrtical.webp", alt: "Duct Tape" },
    { src: "assets/img/perforator-general.webp", alt: "Perforator" },
  ],
  plumbing: [
    { src: "assets/img/drain-rope-plumbing.webp", alt: "Drain Rope" },
    { src: "assets/img/wrench-set-plumbing.webp", alt: "Wrench Set " },
    { src: "assets/img/pipe-tool-plumbing.webp", alt: "Pipe Tool" },
    { src: "assets/img/silicone-gun-plumbing.webp", alt: "Silicone Gun" },
    { src: "assets/img/heat-gun-electrical.webp", alt: "Toilet Auger" },
    {
      src: "assets/img/universal-toolbox-general.webp",
      alt: "Universal Toolbox",
    },
    {
      src: "assets/img/eye-ear-protection-general.webp",
      alt: "Eye Ear Protection",
    },
  ],
};
// Function to display the tools required for the given repair type
function displayTools(repairType) {
  toolsContainer.innerHTML = ""; // Clear any existing tool images
  toolsContainer.classList.add("border-orange"); // Add an orange border to indicate tools need to be selected
  repairTypeSpan.textContent =
    repairType.charAt(0).toUpperCase() + repairType.slice(1) + " Repair"; // Repair type header

  // Get the array of tools for the specified repair type
  const selectedTools = tools[repairType];
  // Iterate over the selected tools and create image elements for each
  selectedTools.forEach((tool) => {
    const img = document.createElement("img"); // Create a new image element
    img.src = tool.src; // Set the image source
    img.alt = tool.alt; // Set the alt text for accessibility
    img.classList.add("tool-image"); // Add the tool-image class for styling
    toolsContainer.appendChild(img); // Add the image to the tools container
  });
}
// Function to set the icon on the tools button based on the repair type
function setToolsButtonIcon(repairType) {
  switch (repairType) {
    case "general":
      toolsButton.innerHTML = '<i class="fa-solid fa-hammer fa-2x"></i>'; // Set to hammer icon
      break;
    case "electrical":
      toolsButton.innerHTML =
        '<i class="fa-solid fa-plug-circle-bolt fa-2x"></i>'; // Set to electrical plug icon
      break;
    case "plumbing":
      toolsButton.innerHTML = '<i class="fa-solid fa-wrench fa-2x"></i>'; // Set to wrench icon
      break;
    default:
      toolsButton.innerHTML =
        '<i class="fa-solid fa-screwdriver-wrench fa-2x"></i>'; // Default: screwdriver and wrench icon
  }
}
//Function to set the icon on the call button to indicate the repair type.
function setCallButtonIcon(repairType) {
  switch (repairType) {
    case "general":
      callButton.innerHTML = '<i class="fa-solid fa-hammer fa-2x"></i>'; // Set to hammer icon
      break;
    case "electrical":
      callButton.innerHTML =
        '<i class="fa-solid fa-plug-circle-bolt fa-2x"></i>'; // Set to electrical bolt icon
      break;
    case "plumbing":
      callButton.innerHTML = '<i class="fa-solid fa-wrench fa-2x"></i>'; // Set to wrench icon
      break;
  }
}

// Function to update the repair counts in the Total Service Calls table
function updateCounts(repairType) {
  switch (repairType) {
    case "general":
      generalCount++; // Increment general repair count
      generalCountEl.textContent = generalCount; // Update the count in the table
      break;
    case "electrical":
      electricalCount++; // Increment electrical repair count
      electricalCountEl.textContent = electricalCount; // Update the count in the table
      break;
    case "plumbing":
      plumbingCount++; // Increment plumbing repair count
      plumbingCountEl.textContent = plumbingCount; // Update the count in the table
      break;
  }
}
// Function to handle the call button click event
function handleCall() {
  toolsButton.disabled = false; // Enable the tools button

  // Array of possible repair types
  const repairTypes = ["general", "electrical", "plumbing"];
  // Randomly select a new repair type
  const newRepairType =
    repairTypes[Math.floor(Math.random() * repairTypes.length)];

  //Update count repairs
  updateCounts(newRepairType);
  // Set the icon in call button
  setCallButtonIcon(newRepairType);

if (currentRepairType === newRepairType) {
  // Repair type is the SAME
  walkerIcon.className = 'fa-solid fa-4x walker-icon fa-person-walking-arrow-right'; // Show keep walking
  toolsButton.disabled = true; // Tools button should remain disabled
} else {
  // Repair type is DIFFERENT
  walkerIcon.className = 'fa-solid fa-4x walker-icon fa-person-walking-arrow-loop-left'; // Show returning
  displayTools(newRepairType); // Display the new tools
}
  //Set the tool button icon
  setToolsButtonIcon(newRepairType);
  currentRepairType = newRepairType; // Update the current repair type

  //Reset the call button after call is accepted
  callButton.innerHTML = '<i class="fa-solid fa-phone-volume fa-2x"></i>';
}

// Function to handle the tools packed button click event
function handleToolsPacked() {
  toolsContainer.classList.remove("border-orange"); // Remove the orange border
  toolsContainer.classList.add("border-green"); // Add a green border to indicate tools are packed
  walkerIcon.classList.add("fa-person-walking-arrow-right"); // Set walker icon to moving right
  walkerIcon.classList.remove("fa-person-walking-arrow-loop-left"); // Ensure returning icon is removed
  toolsButton.disabled = true; // Disable the tools button again
}

// Event listeners
callButton.addEventListener("click", handleCall); // Listen for click on Call button
toolsButton.addEventListener("click", handleToolsPacked); // Listen for click on Tools button
