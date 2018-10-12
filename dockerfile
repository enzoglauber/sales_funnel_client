FROM node:9.11.1
ENV INSTALL_PATH /sales_funnel_client
RUN yarn global add create-react-app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN yarn install
CMD ["yarn", "start"]