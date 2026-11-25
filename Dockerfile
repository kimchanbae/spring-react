# ==================================
# 1. React Build
# ==================================
FROM node:22-alpine AS frontend-build

WORKDIR /frontend

COPY /frontend/package*.json ./

RUN npm ci

COPY /frontend/ ./

RUN npm run build

# ==================================
# 2. Spring Boot Build
# ==================================
FROM maven:3.9-eclipse-temurin-21 AS backend-build

WORKDIR /backend

COPY backend/pom.xml ./

RUN mvn dependency:go-offline

COPY backend/ ./

# Copy React build into Spring Boot static
COPY --from=frontend-build \
    /frontend/dist \
    /backend/src/main/resources/static/

RUN mvn clean package -DskipTests

# ==================================
# 3. Runtime
# ==================================
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=backend-build \
    /backend/target/*.jar \
    app.jar

EXPOSE 9000

ENTRYPOINT [ "java", "-jar", "app.jar" ]