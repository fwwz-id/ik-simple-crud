# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock /app/

# Install dependencies using yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . /app/

# Expose the port that your application will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
