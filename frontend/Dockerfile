# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/frontend/node_modules/.bin:$PATH


# install and cache app dependencies
COPY package.json /app/frontend/package.json
COPY package-lock.json /app/frontend/package-lock.json
RUN npm install
RUN npm config set unsafe-perm true
# RUN npm install react-scripts -g

CMD ["npm", "start"]