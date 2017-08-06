FROM node:8

ENV HOME=/usr/src/app

RUN mkdir $HOME

WORKDIR $HOME

RUN npm install -g @angular/cli@latest \
  && npm install \
  && rm -rf ~/.npm

EXPOSE 4200
