FROM node:latest

WORKDIR /project

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]