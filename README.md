## CI/CD con Azure y GitHub Actions

## Información del Estudiante
Melvin Gustavo Cortez y Cortez
0907-17-3971

| **Repositorio** | https://github.com/GustaCortez/CI-CD.git|

---

## Descripción del Proyecto

Aplicación web desarrollada con **React** que demuestra un flujo completo de **CI/CD (Continuous Integration / Continuous Deployment)** usando:

- **GitHub** como repositorio de código fuente
- **GitHub Actions** como motor de automatización
- **Azure App Service** como plataforma de hospedaje en la nube
- **Express** como servidor Node.js para servir la aplicación en Azure

Cada vez que se realiza un `git push` a la rama `main`, el workflow de GitHub Actions se activa automáticamente: instala dependencias, compila la aplicación React y la despliega en Azure App Service sin intervención manual.

---
## Tecnologías Utilizadas

| Tecnología | Versión | Rol |
|------------|---------|-----|
| React | 18.2.0 | Framework de UI |
| Express | 4.18.2 | Servidor Node.js para Azure |
| Node.js | 20 LTS | Runtime de JavaScript |
| GitHub | — | Control de versiones |
| GitHub Actions | — | Pipeline CI/CD |
| Azure App Service | F1 (Free) | Hospedaje en la nube |

---

## Flujo del Pipeline

```
git push → GitHub Actions → npm install → npm run build → Azure Deploy
```

1. El desarrollador hace git push  a la rama main
2. GitHub Actions detecta el push y lanza el workflow .github/workflows/deploy.yml
3. Se instalan las dependencias con npm install
4. Se compila la app con npm run build
5. Se despliega todo el proyecto (incluyendo server.js) en Azure App Service
6. Azure ejecuta node server.js que sirve los archivos del build/

---

## Estructura del Proyecto

```
CI-CD/
├── .github/
│   └── workflows/
│       └── deploy.yml       
├── public/
│   └── index.html           
├── src/
│   ├── App.js               
│   ├── App.css              
│   ├── index.js             
│   └── index.css            
├── .gitignore
├── package.json
├── server.js                
└── README.md
```

---

## Secrets de GitHub configurados

| Secret | Descripción |
|--------|-------------|
| `AZURE_APP_NAME` | `tarea6-cicd-melvincortez` |
| `AZURE_PUBLISH_PROFILE` | Perfil de publicación descargado desde Azure |

---

## URL de la Aplicación en Azure

```
https://tarea6-cicd-melvincortez-bvf6fdfxfedwczch.eastus-01.azurewebsites.net
```

---

## Ejecutar Localmente

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

> 
