// Get references to DOM elements
const callButton = document.getElementById('callButton');          // Call button
const walkerIcon = document.getElementById('walkerIcon');          // Walker icon
const toolsButton = document.getElementById('toolsButton');          // Tools button
const toolsContainer = document.getElementById('toolsContainer');    // Container for tool images
const toolsTitle = document.getElementById('toolsTitle'); //Required tools
const repairTypeSpan = document.getElementById('repairTypeSpan'); // Type repair

// Get the count elements - these will display the number of each type of repair
const generalCountEl = document.getElementById('generalCount');
const electricalCountEl = document.getElementById('electricalCount');
const plumbingCountEl = document.getElementById('plumbingCount');

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
        { src: "assets/img/protective-gloves-general.webp", alt: "Protective Gloves" },
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
        { src: "assets/img/universal-toolbox-general.webp", alt: "Universal Toolbox" },
        { src: "assets/img/eye-ear-protection-general.webp", alt: "Eye Ear Protection" },
    ],
};

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
