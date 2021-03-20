# Box
Generador de plantillas backend y frontend en AdonisJs

  - Backend NodeJs con AdonisJs
  - FrontEnd con Reat

## Dependencias
  - NodeJs 12 o mayor
  - npm
  
## Start
  - Clonar repositorio 
  - Clonar archivo .env.example y crear archivo .env (Variables de entorno)
  - npm install (instalar dependencias)
  - node ace migration:run (ejecutar migración, crear una SQLite para gestionar los proyectos creados)
  - node ace serve (Crear servidor de pruebas 127.0.0.1:3333)




## Docker

Para generar los archivos docker, debes crear un nuevo proyecto en el box siguiendo los pasos que allí indican, este genera unas credenciales de conexión y un archivo .zip el cual contiende los archivos docker

* instalar docker y docker-compose
* compia los archivos del .zip en un servidor donde tengas instalado docker
* Ejecutar el comando: docker-compose up –d para montar el contenedor
* Para ingresar al proyecto normalmente queda iniciado en 127.0.0.1
