FROM node:20.13.1
WORKDIR /server
COPY . .
RUN npm install
ENV PORT="8500" \
    DB_HOST="db-mtj3c.pub-cdb.ntruss.com" \
    DB_USER="gyulgyul" \
    DB_PORT="3306" \
    DB_NAME="gyultree" \ 
    DB_PWD="gyul3475@" \ 
    DB_ACKEY="vGlQYU5Is12Oaj3V9Gva" \
    DB_SEKEY="Zx4YoJAQjRzDZffVtyEq9MsW3jRwtJrXyWscUizE" \
    DB_BUCKET="gyulstorage" \
    ACCESS_SECRET="gyulgyul" \
    REFRESH_SECRET="gyulgyul" 
EXPOSE 8500
CMD ["npm", "run" "deploy"]