# Node.js Express Application

A simple **Node.js** **Express** application using **Prisma** as the **ORM** and **PostgreSQL** or **CockroachDB** as the database, **Dockerized** for easy deployment.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [Npm](http://npmjs.org)
- [Docker](https://www.docker.com/)

### Clone the Repository

```bash
git clone https://github.com/fwwz-id/ik-simple-crud.git
cd ik-simple-crud
```

### Install Dependencies

```bash
yarn install
```

### Set Up Environment Variables

Create a .env file in the project root with the following command:

```bash
cp .env.example .env
```

Replace user, password, and yourdatabase with your **PostgreSQL** credentials.

### Run the Application Locally

```bash
yarn dev
```

The application will be available defaultly at http://localhost:3000.

### Run Prisma Migrations

```bash
yarn prisma migrate dev
```

### Run Prisma Seeder

```bash
yarn seed
```

## Using Docker

If you prefer using Docker, follow these steps:

### Build the Docker Image

```bash
docker-compose build
```

### Run the Docker Container

```bash
docker-compose up
```

## Available Router

| Route   | Description   |
| ------- | ------------- |
| /api/v1 | API Router v1 |

## License

This repo is under MIT License (MIT). Please see [License File](LICENSE) for more information.

## Maintainer

| Name                 | Email             | Github                                                        |
| -------------------- | ----------------- | ------------------------------------------------------------- |
| Fawwaz Abdurrahim    | fwwz.id@proton.me | [https://www.github.com/fwwz-id](https://www.github.com/fwwz-id) |
| Muhammad Java Arifin | -                 | -                                                             |
| Lucky Alma           | -                 | -                                                             |
| Luqman Hakim         | -                 | -                                                             |
