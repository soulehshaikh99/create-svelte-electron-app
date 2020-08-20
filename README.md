npx degit sveltejs/template create-svelte-electron-app
cd create-svelte-electron-app

Move all dependencies to devDependencies
  "devDependencies": {
    "@rollup/plugin-commonjs": "^14.0.0",
    "@rollup/plugin-node-resolve": "^8.0.0",
    "rollup": "^2.3.4",
    "rollup-plugin-livereload": "^1.0.0",
    "rollup-plugin-svelte": "^5.0.3",
    "rollup-plugin-terser": "^6.0.0",
    "svelte": "^3.0.0"
  },
  "dependencies": {
    "sirv-cli": "^1.0.0"
  }

yarn add --dev electron electron-builder wait-on concurrently
yarn add electron-serve

http://localhost:5000

fsutil file createnew main.js 0

Verify name

Favicon is too small

