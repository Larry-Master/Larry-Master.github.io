What happens if you open http://localhost:3001/?

404 Error, Page not found

Why?

Missing route to the correct index Page
Fixed using the correct route in index.js (delete "hello")

Summary Lab_02
In this task, we set up Docker and configured WSL for running containers. We then created a docker-compose.yml file to set up an NGINX reverse proxy and an application container. The NGINX container was configured to serve static files from a public_html directory by mounting it correctly using Docker volumes. We also added two static HTML files to the public_html folder. The NGINX configuration was adjusted to enable directory listing at /doc/, allowing us to access the folder’s contents directly in the browser.
