FROM node:12

WORKDIR /code

EXPOSE 3000

COPY . .

RUN yarn install --production=false --pure-lockfile

CMD ["yarn", "dev"]
