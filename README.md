

# CatGPT - Open Source Conversational AI

Welcome to CatGPT, an open-source platform inspired by ChatGPT, designed to provide free access to a conversational AI using the Hugging Face LLaMA3 model. This project is built to demonstrate how end-to-end applications are structured and to provide a platform for developers and users to interact with AI technology.


## Features

**Conversational AI Interface:** Leverage Hugging Face's LLaMA3 model to generate responses to user queries.

**User Authentication:** Support for logging in and signing up using Google and GitHub OAuth integrations.

**Responsive Web Design:** Accessible on various devices, ensuring a smooth user experience.

((Privacy Focused:** No logging of personal query data to prioritize user privacy.


## Technologies

**Frontend:** React.js, Tailwind CSS for styling, Redux for state management.

**Backend:** Golang with `gorilla/mux`

**AI Model:** Hugging Face LLaMA3.

**Database:** MongoDB for storing user data and session management.

**Authentication:** OAuth 2.0 with Google and GitHub.

**Hosting:** Deployed on AWS with Docker containerization.


## Project Structure

```
CatGPT/
│
├── client/                # Frontend React application
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
└── docker-compose.yml     # Docker configuration for local development and production environments
```

## Setup Instructions


### Prerequisites

- Golang

- Javascript

- Docker

- MongoDB account

- Google and GitHub developer accounts for OAuth setup


### Local Development

1. **Clone the repository**

 


```bash
 > git clone https://github.com/<yourusername>/CatGPT.git
 > cd CatGPT
```


2. **Set up environment variables**

   - Create `.env` files in both `client` and `server` directories with the necessary API keys and database URIs.

3. **Install dependencies**


```bash
  cd client
  npm install
  cd ../server
  npm install
```


4. **Start the development server**


```bash
  # From the server directory
  npm run dev
  # From the client directory in another terminal
  npm start
```



### Deployment

Deploying to AWS with Docker, including setting up Docker containers and managing services with Docker Compose.


## Acknowledgments

- Hugging Face for the LLaMA3 model

- Inspiration from OpenAI's ChatGPT

- All contributors who participate in the development of CatGPT
