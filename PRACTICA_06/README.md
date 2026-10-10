# Práctica 06 · Secuencia de pantallas Netflix

## Objetivo y alcance

Representar mediante sketches móviles de baja fidelidad la navegación de una aplicación de entretenimiento inspirada en Netflix. El planteamiento académico distingue el recorrido de una persona suscriptora del módulo de administración de catálogo. Los mockups son ilustrativos, no son capturas ni una interfaz oficial.

El módulo administrativo es **conceptual**: se propone para modelar permisos, altas, edición y publicación. No se afirma que estas pantallas pertenezcan a la aplicación pública estándar de Netflix.

## Entregables

- [Diagrama interactivo Archify](secuencia-pantallas.html): rutas principales, bifurcaciones, errores y decisiones; permite seleccionar nodos, usar las vistas guiadas para cada rol y acercar o desplazar el diagrama.
- [Galería de 20 sketches móviles](sketches-moviles.html): filtra por rol o busca una pantalla. Selecciona una tarjeta para consultar su propósito y las acciones completas que abren otras pantallas, incluidos retornos y rutas laterales.
- [Fuente JSON de Archify](secuencia-pantallas.workflow.json): modelo editable que genera el diagrama.

## Roles y recorridos

**Compartido:** S01 Bienvenida → S02 Inicio de sesión → S03 Validación → S04 Selección de perfil o rol. Las credenciales incorrectas muestran el error y regresan al formulario. Los permisos asignados deciden la ruta autorizada.

**Suscriptor:** S05 Inicio → S06 Explorar o S07 Búsqueda → S08 Detalle. Si el título es una película, pasa a S10 Reproductor; si es una serie, pasa por S09 Temporadas y episodios. Desde el detalle también se guarda en S11 Mi lista. El inicio ofrece S12 Continuar viendo, S13 Perfiles y S14 Cuenta; S14 llega a S15 Configuración y ayuda. El reproductor permite volver al detalle o al inicio; cerrar sesión regresa a S01.

**Administración conceptual:** S16 Panel → S17 Listado → S18 Alta o S19 Edición → S20 Categorías y publicación. Los formularios muestran validación. En S20 se publica o se mantiene el borrador, se confirma el cambio y se vuelve al panel. Este recorrido solo aparece cuando el rol está autorizado.

## Matriz de pantallas y navegación

| ID | Pantalla | Rol | Propósito | Origen → destino |
|---|---|---|---|---|
| S01 | Bienvenida | Compartido | Identidad visual, contexto y acceso | S15/S16 → S02 |
| S02 | Inicio de sesión | Compartido | Capturar credenciales | S01/S03 → S03 |
| S03 | Validación de acceso | Compartido | Mostrar autenticación, error o éxito | S02 → S02 (error) / S04 (válido) |
| S04 | Selección de perfil o rol | Compartido | Dirigir según permisos asignados | S03 → S05 (suscriptor) / S16 (administración) |
| S05 | Inicio | Suscriptor | Destacados, recomendaciones y accesos | S04/S10/S13 → S06/S07/S12/S13/S14 |
| S06 | Explorar catálogo | Suscriptor | Descubrir contenido por tipo y género | S05 → S08 |
| S07 | Búsqueda | Suscriptor | Consultar títulos y resultados | S05 → S08 |
| S08 | Detalle del contenido | Suscriptor | Sinopsis, género, duración y clasificación | S06/S07/S10/S11 → S09/S10/S11 |
| S09 | Temporadas y episodios | Suscriptor | Elegir temporada y episodio | S08 → S10 |
| S10 | Reproductor | Suscriptor | Controles, progreso, audio y subtítulos | S08/S09/S12 → S08/S05 |
| S11 | Mi lista | Suscriptor | Consultar y abrir títulos guardados | S08 → S08 |
| S12 | Continuar viendo | Suscriptor | Retomar contenido pendiente | S05 → S10 |
| S13 | Gestión de perfiles | Suscriptor | Crear o editar perfil y preferencias | S05 → S05 |
| S14 | Cuenta y suscripción | Suscriptor | Consultar plan y estado | S05 → S15 |
| S15 | Configuración y ayuda | Suscriptor | Preferencias, accesibilidad, ayuda y sesión | S14 → S14/S01 |
| S16 | Panel administrativo | Administración conceptual | Resumen y herramientas autorizadas | S04/S17/S20 → S17/S01 |
| S17 | Listado de contenido | Administración conceptual | Consultar catálogo y estados | S16/S19 → S18/S19 |
| S18 | Alta de contenido | Administración conceptual | Registrar película o serie y validar campos | S17/S18 → S20/S18 (corregir) |
| S19 | Edición de contenido | Administración conceptual | Editar metadatos y disponibilidad | S17 → S20/S17 (cancelar) |
| S20 | Categorías y publicación | Administración conceptual | Clasificar y publicar o dejar borrador | S18/S19 → S16 (confirmación) |

## Leyenda

- **Rojo:** acento de marca y acciones principales. **Gris oscuro:** estructura, formularios y superficies. **Verde:** recorrido del suscriptor. **Azul claro:** pantallas compartidas. **Rojo claro:** herramientas administrativas conceptuales.
- **Flecha continua destacada:** acción principal; **flecha secundaria:** navegación alternativa; **retorno:** volver o cerrar sesión; **rama de error:** validación o permiso denegado. Las etiquetas expresan la acción que conecta las pantallas.
- **Decisión:** las etiquetas de rama identifican credenciales válidas/incorrectas, tipo película/serie, autorización del rol, publicar o guardar como borrador.
- Las tarjetas verticales numeradas son sketches móviles. El diagrama Archify ofrece navegación y selección interactiva de nodos; la galería muestra el contenido visual completo de cada sketch.
- La vista general prioriza los recorridos centrales para mantenerlos legibles. Consulta los botones de destino de cada sketch para ver los retornos y todas las rutas secundarias del flujo detallado.

## Relación con el modelo CANVAS

La propuesta de valor de acceso bajo demanda, variedad y personalización se refleja en catálogo, recomendaciones, búsqueda, perfiles y reproducción. Los segmentos de clientes se atienden con perfiles y rutas por permisos. La distribución por aplicación se representa con pantallas móviles conectadas; la relación con el cliente aparece en autoservicio, Mi lista, continuar viendo, cuenta y ayuda. La suscripción se muestra en Cuenta y suscripción como fuente de ingresos. El catálogo, la plataforma y los datos de preferencias representan recursos clave; organizar y publicar contenido refleja actividades clave. El flujo conceptual deja visible la participación administrativa en esas actividades. Productoras, titulares de derechos y proveedores tecnológicos son socios relevantes para disponibilidad del catálogo y servicio. Los costos de contenido, producción, tecnología y operación sostienen las capacidades representadas. La práctica modela experiencia y responsabilidades sin inventar cifras financieras.

