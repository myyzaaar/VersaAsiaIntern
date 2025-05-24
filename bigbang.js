// By Amyza MAaijal
// Big Bang Challenge Solution
// This script generates numbers 1-100 and replaces:
// - Numbers divisible by 3 with "BIG"
// - Numbers divisible by 5 with "BANG" 
// - Numbers divisible by both 3 and 5 with "BIGBANG"

const fs = require('fs');

function generateBigBangArray() {
    const result = [];
    
    // Iterate through numbers 1 to 100
    for (let i = 1; i <= 100; i++) {
        let output = "";
        
        // Check if divisible by 3
        if (i % 3 === 0) {
            output += "BIG";
        }
        
        // Check if divisible by 5
        if (i % 5 === 0) {
            output += "BANG";
        }
        
        // If not divisible by 3 or 5, use the number itself
        if (output === "") {
            output = i.toString();
        }
        
        result.push(output);
    }
    
    return result;
}

function saveToFile(array) {
    try {
        // Convert array to JSON format
        const jsonOutput = JSON.stringify(array, null, 2);
        
        // Write to output.json file
        fs.writeFileSync('output.json', jsonOutput);
        console.log('✅ Successfully generated output.json file!');
        console.log('📁 File saved in current directory');
        
        
    } catch (error) {
        console.error('❌ Error writing file:', error.message);
    }
}

// Main execution
function main() {
    
    // Generate the array
    const bigBangArray = generateBigBangArray();
    
    // Save to file
    saveToFile(bigBangArray);
    
}

// Run the script
main();