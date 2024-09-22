import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages'; // Import the plugin

export default defineConfig({
  plugins: [react(), ghPages()], // Include the plugin
  base: 'shreyas-react-portfolio',  // Replace 'your-repo-name' with the name of your GitHub repository
});
