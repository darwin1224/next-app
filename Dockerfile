FROM node:12.13.0

WORKDIR /var/www/html

RUN yarn cache clean -f

COPY . .

EXPOSE ${NEXT_PORT}

CMD [ "yarn", "dev" ]