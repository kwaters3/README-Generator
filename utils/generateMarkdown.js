// Function that returns a license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License'){
   return ``;
  } else {
   const encodedLicense = encodeURIComponent(license);
   return `[![License](https://img.shields.io/badge/License-${encodedLicense}-turquoise.svg)](${renderLicenseLink(license)})`;
  }
 }
 
 
 
 
 // Function that returns license link and information
 // If there is no license, return an empty string
 function renderLicenseLink(license) {
   if (license === 'MIT') {
     return 'https://opensource.org/licenses/MIT';
   } 
   if (license === 'Apache 2.0') {
     return 'https://opensource.org/licenses/Apache-2.0';
   } 
   if (license === 'BSD 3 Clause') {
     return 'https://opensource.org/licenses/BSD-3-Clause';
   // } else if (license === 'No License') {
   //   return '';
   } else {
     return ''; 
   }
 }  
 
   
 
 
 
 
 // Function that returns the license section on the READme
 // If there is no license, return an empty string
 function renderLicenseSection(license) {
   if (license === 'No License') {
     return 'This project requires no license';
   } else {
     return `This project is covered under the following license: ${renderLicenseBadge(license)}`;
   }
 }
 
 
 
 
 
 // TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
   return `# ${data.title}
 
   ${renderLicenseBadge(data.license)} 
 
 ## Description
   ${data.description}
 
 ## Table of Contents
   * [Description](#description)  
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contribution](#contribution)
   * [Tests](#tests)
   * [Questions](#questions)
   
 ## Installation
   ${data.installation}
 
 ## Usage
   ${data.usage}
 
 ## License
   ${renderLicenseSection(data.license)}
 
 ## Contribution
   ${data.contribution}
 
 ## Tests
   ${data.tests}
 
 ## Questions
   If you have any questions, please email me at: ${data.email} <br/>
   My GitHub page is: [${data.username}](https://github.com/${data.username})
   `;
 }
 
 module.exports = generateMarkdown;
 