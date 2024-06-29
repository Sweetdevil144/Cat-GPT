# Developer Introduction to CatGPT

Welcome to the development guide for CatGPT. This document provides the necessary instructions to set up and run the CatGPT application locally using Docker. Our setup includes a React-based frontend and a Go-based backend.

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- Docker
- Docker Compose
- Git (for version control)

## Repository Structure

The CatGPT project is structured as follows:

```bash
CatGPT/
│
├── ollama/ 
│    ├── Dockerfile
│    ├── start.sh
│
├── client/                # Frontend React + Typescript application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                # Backend Go server
│   ├── cmd/               # Main applications for the project
│   │   └── catgpt-backend/
│   │       └── main.go    # Entry point for the backend server
│   ├── pkg/               # Library code that's ok to use by external applications
│   │   ├── config/        # Configuration related things
│   │   ├── db/            # Database related things
│   │   ├── handler/       # Handlers for your routes
│   │   └── middleware/    # Middleware functions
│   ├── .env               # Environment variables
│   ├── go.mod             # Module dependencies
│   └── go.sum             # Module checksums
│
├── README.md              # Project overview and setup instructions
└── docker-compose.yml     # Docker configuration for local development
└── run_llama.sh
```

## Setting Up Your Development Environment

### Step 1: Clone the Repository

To get started, Forke the Repository and clone it to your local machine:

```bash
git clone https://github.com/<yourusername>/CatGPT.git
cd CatGPT
```

### Step 2: Build and Run Using Docker Compose

Docker Compose is used to simplify the process of building and running multi-container Docker applications. To start both the frontend and backend services, use the following command:

```bash
./run_docker.sh

# or

docker-compose up -d
```

This command performs the following actions:

- **Builds the Docker images** for both the frontend and backend if they don't already exist.
- **Starts the containers** according to the specifications in `docker-compose.yml`.
- **Maps the ports** to your local machine, allowing you to access the services (frontend on port 3000 and backend on port 8080).

### Step 3: Access the Services

- **Frontend**: Open your browser and navigate to `http://localhost:3000` to view the React application.
- **Backend**: Access the backend API directly via `http://localhost:8080`.

### Step 4: Making Changes

Any changes you make to the source files will be reflected in the running containers, thanks to Docker volumes:

- **Frontend**: Changes in the `client/src` directory will automatically trigger a rebuild and refresh in the browser.
- **Backend**: Changes in the Go files will require you to restart the Docker container to compile the changes. You can do this by stopping the container (`Ctrl+C`) and rerunning the `docker-compose up` command.

## Additional Commands

To stop the Docker containers, you can use:

```bash
docker-compose down
```

This command stops and removes all running containers based on your `docker-compose.yml` configuration. If you want to remove the volumes along with the containers, use:

```bash
docker-compose down -v
```

To bring your containers back online, use the following command :

```bash
docker-compose up -d
```

## Testing

To test if Ollama is up and runing, try the below bahs command :

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Why is the sky blue?"
}'
```

## Conclusion

This guide should help you get started with developing the CatGPT project using Docker. For any additional information or help, refer to the main `README.md` or contact the project maintainers.
