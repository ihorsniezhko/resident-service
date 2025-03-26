# Resident Service Interface
This README provides a comprehensive overview of the project, making it easy to understand and use the code.  It covers the purpose, features, how to run it, the technologies used, and the structure of the code.

## Project Overview

This project simulates a simplified interface for a local service technician for different types of repairs. It's built using HTML, CSS (with Bootstrap 5), and JavaScript. The application tracks repair calls, displays required tools, and visually represents the technician's status (incoming call, picking up tools, going to/returning from a job).

## Screenshot

![Screenshot of the application](screenshot.png)

### Design Choices
*   The website uses a clean and responsive layout to ensure readability on all screen sizes.
*   Clear and consistent navigation is used to improve user experience.
*   The website design leverages the default **Bootstrap 5 Light theme** and **Google Roboto Serif font**. This choice creates a clean, bright, and approachable aesthetic.

## Balsamiq Wireframes

Balsamiq wireframes are low-fidelity, hand-drawn style digital sketches of the Resident Service website's layout used to plan the user interface. Balsamiq was chosen for its ability to quickly create and iterate on visual layouts, allowing for rapid design decisions and modifications.

### Location
*	The wireframes PDF file for the Resident Service website can be found [here](assets/media/resident-service-wireframes.pdf).
*	The Balsamiq wireframes BMPR file can be found [here](assets/media/resident-service-wireframes.bmpr).

## Features

*   **Simulated Call Receiving:** Click the phone icon button on the left side of the screen to simulate receiving a new repair call. The type of repair (General, Electrical, or Plumbing) is randomly selected. The icon on the button changes to reflect the repair type.
*   **Dynamic Tool Display:** Based on the repair type, the application displays images of the necessary tools. An orange border highlights the tools area when tools need to be selected (should be "placed" in the technician's bag).
*   **Tool "Packing":** Click the tools button on the right side of the screen (which changes icon to reflect repair type) to simulate gathering the required tools. The border around the tools changes to green, indicating they are ready.
*   **Technician Status Indicator:** A "walker" icon visually represents the technician's status:
    *   `fa-person-walking`: Initial state.
    *   `fa-person-walking-arrow-right`: Technician is going to the repair location (green color). This happens when the repair type is the same as the previous call, or after packing tools.
    *   `fa-person-walking-arrow-loop-left`: Technician is returning to base (red color). This happens when a new call has a *different* repair type than the previous one.
*   **Repair Call Counter:** A table keeps track of the total number of General, Electrical, and Plumbing repair calls received during the session.
*   **Responsive Design:** Uses Bootstrap 5 for a responsive layout that adapts to different screen sizes.
*   **Clear Instructions:** Includes a footer with step-by-step instructions explaining how the interface works.
*   **No Persistent Storage** All call type counters are reset when the page reloads.

## Technologies Used

*   HTML5
*   CSS3 (with Bootstrap 5)
*   [Bootstrap 5.3.3](https://getbootstrap.com/)
*   JavaScript (Vanilla JS)
*   [Font Awesome 6.7.2](https://fontawesome.com/)

## Testing
### Lighthouse Report
### Bugs
### Vlidator Testing
### Unfixed Bugs

## Deployment
The website was deployed to **GitHub Pages** using the following steps:

1.  In the GitHub repository, navigate to the **Settings** tab.
2.  From the **Pages** side menu, **Branch** section drop-down menu, select the **Main** and press **Save**.
3.  The live link can be found [here](https://ihorsniezhko.github.io/resident-service/)

## Credits
### Media
*   Site Logo Image, Favicons: [Pngegg](https://www.pngegg.com/en/png-yxixz/)
*   Body Background Image - Panorama of Dnipro city, Ukraine: [Wikipedia](https://commons.wikimedia.org/wiki/File:Bashty_Gora_Kaminnya_Sobornyj_rajon_Dnipro-city_-_panoramio.jpg#file)
*   Images of Parkside repair tools: [Lidl's Parkside section](https://www.lidl.de/c/parkside-du-packst-das/s10026759)
### Resources
*   JavaScript Math functions: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
*   JavaScript Arrow function: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   JavaScript Swith Case: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
*   JavaScript Conditional (ternary) operator: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) 
*   JavaScript classList property: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)