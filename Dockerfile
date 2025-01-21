FROM node:20-alpine 
WORKDIR /app 
COPY package.json ./  
RUN npm i  
COPY . .
EXPOSE 8089 
CMD [ "npm", "start" ]
