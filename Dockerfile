FROM --platform=linux/amd64 node:18
# Create app directory
WORKDIR /usr/src
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install --force

#RUN serve -s build 3000
# If you are building your code for production
# RUN npm ci
COPY . .
WORKDIR /usr/src
RUN npm run build
RUN npm install -g serve
# Bundle app source

EXPOSE 3000
CMD serve -s build