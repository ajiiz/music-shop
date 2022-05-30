FROM node:lts-buster-slim
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY prisma ./prisma/
RUN yarn prisma generate
COPY . .
RUN yarn build
EXPOSE 0-49151
CMD ["yarn", "start"]