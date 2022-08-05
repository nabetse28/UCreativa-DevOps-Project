# UCreativa-DevOps-Project

## Descripcion 

Proyecto en el que se realizara todo el proceso DevOps para el desarrollo y despliegue de una aplicacion web con funciones CRUD, cuyo backend esta escrito en Python y frontend en REACT. 

Esta aplicacion tiene como objetivo mediante la interfaz grafica poder crear una ficha de datos de una persona, poder editar los datos y eliminar la ficha en caso de ser requerido. Para acceder al CRUD el usuario primero tendra que autenticarse en el login con usuario y password.



## Requerimientos
### Para Backend Development:

- [Python 3.10.0](https://www.python.org/) is the programming language used to create the application.
- [Flask RestX 0.5.1](https://flask-restx.readthedocs.io/en/latest/)  Flask-RESTX is an extension for Flask that adds support for quickly building REST APIs. 
- [Mongodb](https://www.mongodb.com/) DataBase
- [Docker](https://www.docker.com/) is a tool used to create a custom image of your application and then deploy it into a cluster.

### Para FrontEnd Development:

- [REACT](https://reactjs.org/) A JavaScript library for building user interfaces.
- [Semantic React UI](https://react.semantic-ui.com/) Semantic UI React provides a way to compose React components through the as prop. It allows composing component features and props without adding extra nested components.

### Para Deployment:

- [GitHubActions](https://docs.github.com/en/actions) Tool that will be used to create the CI/CD pipeline
- [Kubernetes](https://kubernetes.io/) is a tool that enables the creation of clusters in a local machine or even a virtual machine, it is used along with Docker to create big applications.
- [Helm](https://helm.sh/) is a package manager for the kubernetes files, it is used within the project.
- [Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html) is a managed service that you can use to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes..

## Instalar dependencias y probar el app localmente con Docker Compose

1. Anadir el repositorio localmente.
```bash
git clone https://github.com/nabetse28/UCreativa-DevOps-Project.git
```
2. ir al folder del proyecto.
```bash
cd UCreativa-DevOps-Project/
```
3. se nececita un archivo `.env` para poder correr el  `docker-compose`. Crear el archivo `.env` de la siguiente manera:

```bash
cd UCreativa-DevOps-Project/
nano .env
```
Agregar las siguiente variables de entorno dentro del archivo `.env`:
```
MONGO_USER=<YOUR_USER>
MONGO_PASSWORD=<YOUR_PASSWORD>
MONGO_SERVER=mongo_db
```

4. Correr el comando del docker compose para correr toda la aplicacion:

```bash
docker-compose up --build -d
```

5. Una vez el comando corra exitosamente la aplicacion estara disponible localmente en el localhost:8090. 

