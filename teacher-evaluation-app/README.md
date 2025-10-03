# Sistema de Evaluación de Profesores

Aplicación web desarrollada con Angular 19 para la evaluación de profesores por parte de psicólogos.

## Descripción

Este sistema permite a los psicólogos evaluar el desempeño de profesores asignados mediante un formulario estructurado. Cada rubro se califica en una escala del 1 al 4, siendo 1 el puntaje más bajo y 4 el más alto.

## Funcionalidades

- **Login**: Sistema de autenticación para psicólogos
- **Dashboard**: Página de inicio con el avance de evaluaciones del período actual
- **Profesores Asignados**: Lista de profesores asignados al psicólogo
- **Formulario de Evaluación**: Formulario estructurado para evaluar diferentes aspectos de la clase
- **Historial**: Consulta de evaluaciones realizadas anteriormente
- **Confirmación de Envío**: Página de éxito al completar una evaluación

## Rubros de Evaluación

El formulario incluye los siguientes rubros (calificados del 1 al 4):

1. Dominio del tema
2. Claridad en la explicación
3. Gestión del aula
4. Interacción con estudiantes
5. Puntualidad
6. Material didáctico
7. Evaluación justa
8. Motivación

## Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Angular CLI 19

## Instalación

```bash
# Instalar dependencias
npm install
```

## Desarrollo

```bash
# Ejecutar servidor de desarrollo
ng serve

# La aplicación estará disponible en http://localhost:4200
```

## Construcción

```bash
# Compilar para producción
ng build

# Los archivos compilados se guardarán en la carpeta dist/
```

## Uso

1. Acceder a la aplicación y hacer login (cualquier usuario/contraseña es válido para propósitos de demostración)
2. En el dashboard, ver el progreso de evaluaciones del período actual
3. Navegar a "Profesores" para ver la lista de profesores asignados
4. Seleccionar "Evaluar" en un profesor para abrir el formulario de evaluación
5. Calificar cada rubro del 1 al 4 y agregar comentarios opcionales
6. Enviar la evaluación
7. Consultar el historial de evaluaciones previas

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── login/          # Componente de inicio de sesión
│   │   ├── dashboard/      # Dashboard principal
│   │   ├── teachers-list/  # Lista de profesores
│   │   ├── evaluation-form/ # Formulario de evaluación
│   │   ├── history/        # Historial de evaluaciones
│   │   └── success/        # Confirmación de envío
│   ├── services/
│   │   ├── auth.ts         # Servicio de autenticación
│   │   └── data.ts         # Servicio de datos
│   ├── guards/
│   │   └── auth-guard.ts   # Guard para proteger rutas
│   └── app.routes.ts       # Configuración de rutas
└── styles.css              # Estilos globales
```

## Tecnologías

- Angular 19
- TypeScript
- CSS3
- Standalone Components
- Reactive Forms

## Nota

Esta es una aplicación de demostración. En un entorno de producción, sería necesario:

- Implementar autenticación real con JWT
- Conectar a una API backend
- Agregar validaciones más robustas
- Implementar manejo de errores
- Agregar tests unitarios y de integración
