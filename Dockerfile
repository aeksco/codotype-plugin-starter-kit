FROM codotype/codotype-plugin-prod

RUN mkdir -p /usr/src/plugin/dist

COPY ./dist /usr/src/plugin/dist

# Start the Next.js app
CMD [ "yarn", "start" ]
