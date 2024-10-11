FROM node:21-alpine
WORKDIR /usr/src/app
ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install pm2 -g
EXPOSE 8810
CMD ["pm2-runtime", "process.yaml"]