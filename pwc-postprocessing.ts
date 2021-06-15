// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON } from 'https://deno.land/x/flat@0.0.10/mod.ts' 

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)



// Step 3. Write a new JSON file with our filtered data
const newFilename = `pwc-datasets-mapping.json` // name of a new file to be saved
// await writeJSON(newFilename, json) // create a new JSON file with just the Bitcoin price
await Deno.writeTextFile(
    newFilename,
    JSON.stringify(json, null, `\t`)
)
console.log("Wrote a post process file")

// Optionally delete the original file
// await removeFile('./btc-price.json') // equivalent to removeFile('btc-price.json')
