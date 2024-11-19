FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV"="development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
ENV Port=4000
EXPOSE $Port
# CMD ["npm","run","dev"]
CMD [ "node","server.js" ]
