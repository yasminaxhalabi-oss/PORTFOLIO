# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

# התקנת חבילות
COPY package*.json ./
RUN npm install

# בניית הפרויקט
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# העתקת הקבצים שנבנו (כולל ה-PDF שעובר מ-public ל-dist)
COPY --from=build /app/dist /usr/share/nginx/html

# העתקת הגדרות השרת המותאמות שלנו
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]