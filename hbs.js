const filename = process.argv[2];
const datafile = process.argv[3];

if (!filename) {
  console.log("Please provide a filename as the first command line argument.");
  process.exit(2);
}
if (!datafile) {
    console.log("Please provide a data file as the second command line argument.");
    process.exit(3);
  }

const fs = require('fs');
const Handlebars = require('handlebars');


// Load and parse JSON data
const data = JSON.parse(fs.readFileSync(datafile, 'utf-8'));

// Load the Handlebars template
const templateSource = fs.readFileSync(filename, 'utf-8');

// Compile the template
const template = Handlebars.compile(templateSource);

// Generate HTML
const html = template(data);

// create output file
const match = filename.match(/([^\/\\]+)(?=\.[^\/\\]+$)/);
const basename = match ? match[0] : "hbs-output.txt";

const outputfile = 'output/' + basename ;
// Write the result to an output file
fs.writeFileSync(outputfile, html, 'utf-8');

console.log(`page generated: ${outputfile}`);
