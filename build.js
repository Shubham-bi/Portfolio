const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const ASSETS_DIR = path.join(__dirname, 'assets');
const DIST_ASSETS_DIR = path.join(DIST_DIR, 'assets');

const FILES_TO_COPY = ['index.html', 'style.css', 'script.js'];

function copyDirSync(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

console.log('Starting build process...');

// Clean existing dist folder
if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
    console.log('Cleaned existing dist/ directory.');
}

// Create fresh dist folder
fs.mkdirSync(DIST_DIR, { recursive: true });

// Copy files
FILES_TO_COPY.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(DIST_DIR, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✓ Copied ${file} to dist/`);
    } else {
        console.error(`✗ Error: ${file} not found!`);
        process.exit(1);
    }
});

// Copy assets folder
if (fs.existsSync(ASSETS_DIR)) {
    copyDirSync(ASSETS_DIR, DIST_ASSETS_DIR);
    console.log('✓ Copied assets folder to dist/');
} else {
    console.warn('! Warning: assets/ folder not found.');
}

console.log('Build completed successfully. Production build is ready in dist/ folder!');
