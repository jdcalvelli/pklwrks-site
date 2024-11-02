# STAGE 1 - BUILD FRONTEND
FROM node:20 AS frontend-builder
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2 - SERVE WITH HTTPD
FROM httpd:2.4
COPY --from=frontend-builder /frontend/dist /usr/local/apache2/htdocs/