

SQL Server - Funciones definidas por el usuario
## (escalares)

Las funciones definidas por el usuario en SQL Server (UDFs, por sus siglas en inglés, User-
Defined Functions) son rutinas que permiten a los usuarios encapsular lógica de negocio en un
formato reutilizable. Estas funciones pueden aceptar parámetros de entrada, realizar acciones
y devolver un resultado. Las funciones aquí descriptas son escalares, es decir que retornan un
único valor.
Estas funciones SQL nos ayudan a simplificar nuestro desarrollo al encapsular la lógica
comercial compleja y hacer que esté disponible para su reutilización en cualquier lugar según
las necesidades. Las funciones definidas por el usuario hacen que el código necesario para
consultar datos sea mucho más fácil de escribir.
También mejoran la legibilidad y la funcionalidad de las consultas, y permiten que otros
usuarios repliquen los mismos procedimientos.
## Sintaxis
Para crear una función escalar la sintaxis es la siguiente:
CREATE FUNCTION nombreFuncion (parámetro1 AS tipo de dato,
parámetro2 AS tipo de dato...)
RETURNS tipo de dato
## AS
## BEGIN
## INSTRUCCIONES
RETURN valor
## END

En la sentencia CREATE FUNCTION se le indica el nombre a la función y los parámetros que
recibirá, en la clausula RETURNS se le indica que tipo de dato retornará la función,  luego de
la palabra AS se escribe la lógica y el valor que retornará según dicha lógica, luego de la
cláusula RETURN.
Ejemplo de función:
Ejemplo de una función la cual recibe como parámetro el id de un cliente y retorna la suma
total de ventas a dicho cliente.
CREATE FUNCTION uf_SumaVentas(@clienteid as int)
RETURNS numeric(18,2) –- indico que tipo de dato retorna
## AS
## BEGIN
DECLARE @total AS numeric(18,2) -- declaro una variable para
-- almacenar el valor devuelto

SELECT @total = SUM(Importe) FROM Ventas --lleno la variable
WHERE ClienteId = @clienteid  --con la consulta

RETURN @total -- retorno la variable
## END

Llamando a la función
Para utilizarla se realiza con la sentencia SELECT y luego invocando el nombre de la función,
precedido del nombre de su propietario (por defecto dbo.)  y luego entre paréntesis se cargan

el parámetro (si son más de uno, se cargan en orden y separados por comas), de la siguiente
manera:
SELECT dbo.uf_SumaVentas(799)

Utilización de la función
Podemos usar las funciones en cualquier consulta que deseamos, como si fuera una columna
más. Por ejemplo, con la función anterior podría hacer un SELECT de la tabla clientes para
mostrar sus datos y usar la función para agregar una columna mas mostrando el total gastado.
## SELECT
RazonSocial,
NroDoc,
## Direccion,
dbo.uf_SumaVentas(ClienteId) as ResultadoFuncion
FROM Clientes

## Resultado


¿Dónde se encuentran las funciones definidas por el usuario?
Las funciones de usuario se guardan en la base de datos, dentro de la carpeta Programacion /
Programmabilty > Funciones / Functions > Funciones Escalares / Scalar-valued Functions,
haciendo click derecho sobre ellas y seleccionando la opción Modificar se abrirá en el editor
para realizar cualquier modificación sobre ella.
