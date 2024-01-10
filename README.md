# Diarios de Vuelo - Proyecto Express y TypeScript

Este proyecto utiliza Express y TypeScript para gestionar diarios de vuelo, permitiendo operaciones básicas como obtener la lista de entradas, obtener una entrada por su ID y agregar nuevas entradas.

## Estructura de Carpetas

- **utils.ts**: Funciones de utilidad para analizar y validar datos de solicitudes.
  
- **types.d.ts**: Interfaces y tipos, como `DiaryEntry` y `NewDiaryEntry`.
  
- **enums.ts**: Enumeraciones para clima (`Weather`) y visibilidad (`Visibility`).
  
- **index.ts**: Punto de entrada principal de la aplicación Express.
  
- **services/diaries.json**: Almacena datos de diarios en formato JSON.
  
- **services/diaryServices.ts**: Funciones de servicio para interactuar con los datos de los diarios.
  
- **routes/diaries.ts**: Define rutas de la API relacionadas con los diarios.

## Configuración y Ejecución

1. Instala las dependencias usando `npm install`.
  
2. Ejecuta la aplicación con `npm start`.
  
3. Accede a la API mediante `http://localhost:3000/api/diaries`.

## Endpoints de la API

- **GET /api/diaries**: Obtiene la lista de entradas de diario sin información sensible.

- **GET /api/diaries/:id**: Obtiene una entrada de diario por su ID.

- **POST /api/diaries**: Agrega una nueva entrada de diario. Se espera un cuerpo de solicitud con datos válidos.

Ejemplo de Cuerpo para POST:
```
{
  "comment": "Nuevo vuelo",
  "date": "2024-01-10",
  "weather": "sunny",
  "visibility": "great"
}
```

## Uso de la API

### Obtener Lista de Entradas

```bash
http://localhost:3000/api/diaries
```

Obtener Entrada por ID
```bash
http://localhost:3000/api/diaries/1
```
## Authors
[Abel Machaca](https://www.linkedin.com/in/abelmachaca/)
