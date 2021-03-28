# Extend codotype/codotype-plugin-prod
FROM codotype/codotype-plugin-prod

# TODO - add additional step here to ensure that plugin is built when copying into usr/src/plugin

# Add /usr/src/plugin directory
RUN mkdir -p /usr/src/plugin

# Add /plugin into directory
COPY ./ /usr/src/plugin

# Start the Next.js app
CMD [ "yarn", "start" ]
