FROM docker.m.daocloud.io/nginx:1.19.1-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --update bash
COPY .vitepress/dist /usr/share/nginx/html/
# Copy the default nginx.conf
COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
