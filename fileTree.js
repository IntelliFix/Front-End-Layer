const fs = require('fs');
const path = require('path');
const recursive = require('recursive-readdir');

// Define the directory to scan and the exclusions
const directoryPath = 'D:\\Projects\\Front-End-Layer';
const exclusions = ['node_modules', '.git', '*.html', '*.cs'];

// Read the directory structure recursively
recursive(directoryPath, exclusions, function (err, files) {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Create a tree-like structure from the file list
    const tree = buildTree(directoryPath, files);

    // Convert the tree to a formatted string
    const treeString = treeToString(tree);

    // Write the formatted string to an output file
    const outputFilePath = path.join(__dirname, 'output.txt');
    fs.writeFileSync(outputFilePath, treeString);

    console.log(`Directory tree has been written to ${outputFilePath}`);
});

// Function to build a tree structure from the file list
function buildTree(root, files) {
    const tree = {};
    files.forEach(file => {
        const relativePath = path.relative(root, file);
        const parts = relativePath.split(path.sep);
        let current = tree;
        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = (index === parts.length - 1) ? null : {};
            }
            current = current[part];
        });
    });
    return tree;
}

// Function to convert the tree object to a string format
function treeToString(tree, depth = 0) {
    let treeStr = '';
    const indent = '│   '.repeat(depth);
    const keys = Object.keys(tree);
    keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        treeStr += `${indent}${isLast ? '└── ' : '├── '}${key}\n`;
        if (tree[key]) {
            treeStr += treeToString(tree[key], depth + 1);
        }
    });
    return treeStr;
}
