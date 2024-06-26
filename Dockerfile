FROM node:20.15
WORKDIR /app
COPY package.json package-lock.json /app
RUN npm install
COPY . /app
EXPOSE 3001
CMD ["node", "index.js"]