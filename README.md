## PRACTICAS DE LA ASIGNATURA DE INTEGRADORA
## MTI- MARCO A. RAMÍREZ H.

| PRACTICA | Descripción |
|---------|-------------|
| **PRACTICA 02** | https://sayuridbc.github.io/PRACTICAS_INTEGRADORA_230770/ |

# PRÁCTICAS DE LA ASIGNATURA DE INTEGRADORA

## MTI — Marco A. Ramírez H.

Repositorio de evidencias y documentación correspondiente a las prácticas de la asignatura **Integradora**.

---

## 📚 Prácticas

| Práctica | Descripción | Evidencia |
|---|---|---|
| **Práctica 02** | Arquitectura inicial de la aplicación móvil, definición de componentes, servicios y flujo de comunicación. | [Ver práctica](https://sayuridbc.github.io/PRACTICAS_INTEGRADORA_230770/) |

---

## 🏗️ Arquitectura inicial de la aplicación móvil

La Práctica 02 presenta una propuesta inicial de arquitectura para una aplicación móvil desarrollada con **Flutter**. La solución separa el cliente móvil de los servicios de negocio y contempla autenticación, persistencia de datos y servicios externos.

### Componentes principales

- **Aplicación móvil:** cliente desarrollado con Flutter.
- **Keycloak:** gestión de identidad y autenticación mediante OAuth 2.0 / OpenID Connect.
- **API REST:** servicio de negocio desarrollado con FastAPI.
- **PostgreSQL:** almacenamiento de datos relacionales.
- **MongoDB:** almacenamiento de datos documentales.
- **Servicio de folletos / mapas:** fuente de contenido y geodatos externos.
- **Docker:** contenedores utilizados para el entorno local de desarrollo.
- **Docker Compose:** orquestación de los servicios del entorno local.

### Diagrama de arquitectura

![Arquitectura inicial de la aplicación móvil](/PRACTICA_02/docs/digrama.png)

### Flujo general

1. La aplicación móvil inicia el proceso de autenticación con **Keycloak**.
2. Keycloak autentica al usuario mediante **OAuth 2.0 / OpenID Connect** y el flujo **PKCE**.
3. La aplicación consume la **API REST** mediante HTTPS utilizando un Bearer Token/JWT.
4. La API valida los tokens antes de permitir el acceso a los recursos protegidos.
5. La API consulta **PostgreSQL** y/o **MongoDB** dependiendo del tipo de información requerida.
6. Los servicios externos proporcionan contenido o geodatos cuando son necesarios.

---

## 🛠️ Tecnologías y herramientas

| Tecnología | Uso |
|---|---|
| **Flutter** | Desarrollo de la aplicación móvil |
| **FastAPI** | API y lógica de negocio |
| **Keycloak** | Autenticación y autorización |
| **PostgreSQL** | Base de datos relacional |
| **MongoDB** | Base de datos documental |
| **Docker** | Contenerización |
| **Docker Compose** | Orquestación local |
| **OAuth 2.0 / OpenID Connect** | Autenticación |
| **JWT / Bearer Token** | Autorización de solicitudes |

---

## 🔐 Consideraciones de seguridad

La arquitectura contempla una separación entre el cliente móvil y los servicios internos.

La comunicación con la API se realiza mediante **HTTPS**, mientras que la autenticación utiliza **OAuth 2.0 / OpenID Connect** y el flujo **PKCE**, apropiado para aplicaciones móviles.

La API valida los tokens recibidos antes de permitir el acceso a los recursos protegidos.

---

## 🐳 Entorno de desarrollo

El proyecto contempla un entorno local basado en **Docker** y **Docker Compose**, permitiendo ejecutar y organizar los servicios necesarios para el desarrollo y las pruebas de la aplicación.

### Estructura sugerida

```text
PRACTICAS_INTEGRADORA_230770/
├── docs/
│   └── arquitectura-inicial.png
├── README.md
└── ...
