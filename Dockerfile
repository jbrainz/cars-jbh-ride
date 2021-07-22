FROM node:15.4

WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .

CMD yarn start dev 
