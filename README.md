# DevOps Node.js Express API activity

This project implements the supplied DevOps class activity: an Express API, an Alpine based Docker image, and a GitHub Actions container build and endpoint test.

## Run locally

```sh
npm ci
node app.js
```

Open http://localhost:3000/ and http://localhost:3000/health.

## Build and run the container

```sh
docker build -t devops-nodejs-api:v1.0 .
docker run -d -p 3000:3000 --name nodejs-api-container devops-nodejs-api:v1.0
```

Stop the local Node.js process before running the container on the same host port.

## Continuous integration

`.github/workflows/ci-pipeline.yml` runs on pushes and pull requests to `main`. It installs locked dependencies, builds the Docker image, starts a container, checks `/health` and `/`, and removes the test container.

The Docker base image and application Node version follow the manual. The workflow uses checkout and setup-node v4 instead of v3, and adds actual endpoint assertions to the manual's container startup step.
