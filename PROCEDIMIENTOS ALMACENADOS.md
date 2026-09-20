# PROCEDIMIENTOS ALMACENADOS

Una de Las herramientas más usadas en el diseño de la base de datos, son los Procedimientos almacenados (Stored Procedures), pues estos permiten agilizar los procesos de consultas de datos, aumentar la seguridad, reutilizar código y permiten desarrollo de software más ágil.

Un procedimiento almacenado de SQL Server es un grupo de una o varias instrucciones en lenguaje SQL. Los procedimientos se asemejan a las construcciones de otros lenguajes de programación, porque pueden:

- Aceptar parámetros de entrada y devolver varios valores en forma de parámetros de salida al programa que realiza la llamada.

- Contener instrucciones de programación que realicen operaciones en la base de datos. Entre otras, pueden contener llamadas a otros procedimientos

- Devolver un valor de estado a un programa que realiza una llamada para indicar si la operación se ha realizado correctamente o se han producido errores, y el motivo de estos.

## Ventajas de usar procedimientos almacenados.

- 1. Mejora del rendimiento: Los procedimientos almacenados se almacenan en el servidor de base de datos, lo que significa que su lógica de ejecución se precompila y se guarda en caché. Esto reduce la sobrecarga de la red y la necesidad de volver a compilar la consulta cada vez que se ejecuta, lo que mejora significativamente el rendimiento.

- 2. Seguridad: Los procedimientos almacenados pueden definirse con permisos específicos, lo que permite controlar quién puede ejecutarlos. Esto ayuda a garantizar la seguridad de los datos y evita la ejecución de consultas maliciosas o no autorizadas.

- 3. Reutilización de código: Puedes crear procedimientos almacenados para realizar tareas comunes o complejas y reutilizarlos en múltiples partes de tu aplicación. Esto reduce la duplicación de código y facilita el mantenimiento.

- 4. Abstracción de la lógica de negocio: Los procedimientos almacenados permiten separar la lógica de negocio de la capa de presentación de la aplicación. Esto hace que el código de la aplicación sea más limpio y mantenible.

- 5. Optimización de consultas: Puedes optimizar consultas complejas dentro de un procedimiento almacenado para mejorar la eficiencia de las operaciones de base de datos. Esto es especialmente útil cuando se trabaja con grandes conjuntos de datos.

- 6. Control de transacciones: Los procedimientos almacenados pueden incluir instrucciones de control de transacciones (BEGIN TRANSACTION, COMMIT, ROLLBACK), lo que permite realizar operaciones atómicas y garantizar la integridad de los datos.

- 7. Reducción de la carga del servidor: Al reducir la cantidad de tráfico de red necesario para ejecutar consultas, los procedimientos almacenados pueden aliviar la carga del servidor, lo que mejora el rendimiento general de la aplicación.

- 8. Documentación incorporada: Los procedimientos almacenados suelen incluir comentarios y documentación interna que facilita la comprensión de su funcionamiento, lo que simplifica el trabajo en equipo y el mantenimiento a largo plazo.

- 9. Mayor eficiencia en el desarrollo: Al dividir la lógica de la base de datos en procedimientos almacenados, los desarrolladores pueden trabajar de manera más eficiente, ya que pueden centrarse en aspectos específicos de la aplicación sin preocuparse por la complejidad de las consultas SQL.


Para crear un procedimiento almacenado en SQL Server, se puede utilizar la siguiente sintaxis:

CREATE PROCEDURE NombreDelProcedimiento

( @Parametro1 TipoDeDato,

@Parametro2 TipoDeDato = valor_por_defecto,

...

)

AS

BEGIN

-- Lógica del procedimiento aquí

END;

## Donde:

- CREATE PROCEDURE: Esta es la declaración que indica que se está creando un procedimiento almacenado.

- NombreDelProcedimiento: Se debe reemplazar "NombreDelProcedimiento" con el nombre que se desea dar al procedimiento almacenado.

- @Parametro1, @Parametro2, ...: Se puede especificar cero o más parámetros que el procedimiento aceptará. Cada parámetro se define con un nombre precedido por el símbolo "@" y un tipo de dato. Estos parámetros son opcionales y se utilizan para pasar valores al procedimiento cuando se llama. Si algún parámetro esta acompañado de un signo igual y un valor, esto significa que ese valor es el valor por defecto para ese parámetro, por lo tanto, si este no se proporciona en la ejecución del procedimiento, tomara el valor allí indicado.

- AS: Indica el inicio del cuerpo del procedimiento almacenado.

- BEGIN y END: Define el bloque de código que constituye la lógica del procedimiento almacenado. Se debe escribir el código SQL entre estas dos palabras clave.

Dentro del bloque BEGIN y END, se pueden incluir una serie de instrucciones SQL que realicen las acciones deseadas. Por ejemplo, se podría tener consultas SELECT, INSERT, UPDATE, DELETE, y cualquier otra lógica necesaria para llevar a cabo la tarea del procedimiento almacenado.

Una vez que se haya definido el procedimiento almacenado, se podrá ejecutar la instrucción CREATE PROCEDURE en una ventana de consulta de SQL Server Management Studio (SSMS) para crear el procedimiento en la base de datos el cual se almacenara en la carpeta programación de la base de datos.


Luego, se podrá llamar al procedimiento almacenado utilizando la instrucción EXEC o EXECUTE y se le pasan los parámetros si es que tuviera.

```
EXEC NombreDelProcedimiento @Parametro1 = 1, @Parametro2 = ‘a’,….
```

## Ejemplo:

```
CREATE PROCEDURE sp_Producto
( @productoid int )
AS
BEGIN
SELECT Producto,
precioventa,
stock
FROM Productos
WHERE productoid = @productoid
END;
```

El procedimiento anterior acepta un parámetro de entrada @productoid de tipo entero (int). Su función principal es recuperar información sobre un producto de una tabla llamada "Productos" en función del ID del producto proporcionado como parámetro. Cuando se ejecuta este procedimiento almacenado y se le proporciona un valor para @productoid, devolverá el nombre del producto, el precio de venta y el stock de ese producto específico en la tabla "Productos".

Para ejecutarlo:

EXEC sp_Producto @productoid = 1
