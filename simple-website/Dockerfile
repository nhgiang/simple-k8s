FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./src /usr/share/nginx/html
COPY ./public/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]