# Tarea No. 6 — CI/CD con Azure y GitHub Actions

## Información del Estudiante
Melvin Gustavo Cortez y Cortez
0907-17-3971

CI/CD (Integración y Despliegue Continuos)



## Descripción del Proyecto

Aplicación web desarrollada con **React** que demuestra un flujo completo de **CI/CD (Continuous Integration / Continuous Deployment)** usando:

- **GitHub** como repositorio de código fuente
- **GitHub Actions** como motor de automatización
- **Azure App Service** como plataforma de hospedaje en la nube

Cada vez que se realiza un `git push` a la rama `main`, el workflow de GitHub Actions se activa automáticamente: instala dependencias, compila la aplicación React y la despliega en Azure App Service sin intervención manual.

---

## Tecnologías Utilizadas

React 18 | Framework de UI |
GitHub | Control de versiones |
GitHub Actions | Pipeline CI/CD |
Azure App Service | Hospedaje en la nube |

---

## Flujo del Pipeline

```
git push → GitHub Actions → npm install → npm run build → Azure Deploy
```

1. El desarrollador hace `git push` a la rama `main`
2. GitHub Actions detecta el push y lanza el workflow `.github/workflows/deploy.yml`
3. Se instalan las dependencias con `npm install`
4. Se compila la app con `npm run build`
5. El build se despliega automáticamente en **Azure App Service**

---

## Estructura del Proyecto

```
ci-cd-app/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Pipeline CI/CD
├── public/
│   └── index.html
├── src/
│   ├── App.js               # Componente principal
│   ├── App.css              # Estilos
│   └── index.js             # Punto de entrada
├── .gitignore
├── package.json
└── README.md
```

---

## Secrets de GitHub requeridos

| Secret | Descripción |
|--------|-------------|
| `AZURE_APP_NAME` | Nombre del App Service en Azure |
| `AZURE_PUBLISH_PROFILE` | Perfil de publicación descargado desde Azure |

---

## Despliegue Local

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
