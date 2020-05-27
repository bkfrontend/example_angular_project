FROM ubuntu:16.04

RUN apt-get update && \
  apt-get install -y \
   curl \
   wget \
   python \
   software-properties-common \
   git \
   nano \
   htop

RUN apt-get install -y python-software-properties
RUN apt-get update -y

RUN apt-get update && \
  apt-get install -y \
  nginx

RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 7.10.1

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
  && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs

COPY nginx_server.conf /etc/nginx/sites-enabled/default

RUN apt-get install apt-transport-https
RUN npm install -g uglify-js bower

CMD nginx -g "daemon off;"

EXPOSE 80

