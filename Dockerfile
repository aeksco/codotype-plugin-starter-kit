FROM codotype/codotype-plugin-prod

RUN mkdir -p /usr/src/plugin

COPY ./ /usr/src/plugin

# Start the Next.js app
CMD [ "yarn", "start" ]
