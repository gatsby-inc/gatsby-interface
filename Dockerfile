# FROM node:10-slim
FROM buildkite/puppeteer:latest

# Create work directory
WORKDIR /src

# Install dependencies
COPY package.json yarn.lock ./
COPY scripts ./scripts
ENV SKIP_BUILD=1
RUN yarn

# Copy project files into the docker image
COPY . .
