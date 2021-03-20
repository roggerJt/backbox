#Docker V0.0.1
FROM node:14
RUN apt-get update && apt-get install -y \
	git 

COPY . /app
WORKDIR /app
RUN npm install
RUN node ace build --production
RUN cp .env.example build/.env
WORKDIR /app/build
RUN npm ci --production
RUN mkdir /app/build/tmp
VOLUME /app/build/tmp
RUN node ace migration:run

EXPOSE  3333

CMD ["node", "server.js"]