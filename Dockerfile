# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

# העתקת קבצי ההגדרות והתקנת חבילות
COPY package*.json ./
RUN npm install

# העתקת כל שאר הקבצים ובניית הפרויקט
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# העתקת הקבצים שנבנו משלב ה-build לתיקיית ההגשה של Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# חשיפת פורט 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]