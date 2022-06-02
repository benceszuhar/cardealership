FROM openjdk:17-jdk-alpine3.14

COPY "./target/cardealership.jar" "/application/cardealership.jar"

CMD ["java", "-jar", "/application/cardealership.jar"]