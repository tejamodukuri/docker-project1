FROM node:9.11.1
COPY src /app
WORKDIR /app
EXPOSE 6060
RUN npm install
CMD npm start
