# Usar imagen oficial de Node.js
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos del backend
COPY . .

# Instalar dependencias
RUN yarn install

# Compilar Strapi (necesario si tenés builds personalizados)
RUN yarn build

# Exponer el puerto que usa Strapi
EXPOSE 1337

# Comando para arrancar Strapi
CMD ["yarn", "start"]
