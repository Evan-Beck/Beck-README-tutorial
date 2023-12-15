// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Added Apache 2.0 license link, return links for if the badge exists and an empty string. Repeated this for license link and section as well - Evan.
  if (license) {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

    This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE.md](LICENSE.md) file for details.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Title, description, installation, and other elements required in the README - Evan.
  const titleSection = `# ${data.title}\n`;
  const descriptionSection = `## Description\n${data.description}\n`;
  const tableOfContentsSection = `## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n`;
  const installationSection = `## Installation\n${data.installation}\n`;
  const usageSection = `## Usage\n${data.usage}\n`;
  const licenseBadgeSection = `${renderLicenseBadge(data.license)}\n`;
  const licenseLinkSection = `${renderLicenseLink(data.license)}\n`;
  const licenseSection = `${renderLicenseSection(data.license)}\n`;
  const contributingSection = `## Contributing\n${data.contributing}\n`;
  const testsSection = `## Tests\n${data.tests}\n`;
  const questionsSection = `## Questions\nFor questions, please contact [${data.username}](https://github.com/${data.username}) or email at ${data.email}.\n`;
 
  return (
    titleSection +
    descriptionSection +
    tableOfContentsSection +
    installationSection +
    usageSection +
    licenseBadgeSection +
    licenseLinkSection +
    licenseSection +
    contributingSection +
    testsSection +
    questionsSection
  );
}

  // Combines all sections to form the complete README - Evan.
  

module.exports = generateMarkdown;
