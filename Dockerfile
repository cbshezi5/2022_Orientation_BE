from node:13.8.0-alpine

COPY dist dist/
COPY package.json

ENV PORT 80
EXPOSE 80

CMD ["npm","run","production"]