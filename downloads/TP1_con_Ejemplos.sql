--1. Insertar datos:
--a) Insertar 1 nueva película con todos sus datos.

INSERT INTO [dbo].[Pelicula]
           ([TituloOriginal]
           ,[TituloLatam]
           ,[TagLine]
           ,[FechaEstreno]
           ,[Sinopsis]
           ,[SitioWeb]
           ,[DirectorID]
           ,[EstudioID]
           ,[PaisID]
           ,[LenguajeID]
           ,[GeneroID]
           ,[Duracion]
           ,[ClasificacionID]
           ,[Presupuesto]
           ,[Recaudacion]
           ,[OscarNomin]
           ,[OscarGanados])
     VALUES
           ('Barbie'
           ,'Barbie'
           ,'Ella lo es todo, el es solo Ken'
           ,'20230721'
           ,'Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial completa. O seas Ken.'
           ,'www.barbie.com'
           ,4
           ,6
           ,241
           ,1
           ,7
           ,114
           ,1
           ,145000000
           ,1447000000
           ,8
           ,1)
GO

select * from pelicula where titulooriginal = 'Barbie'


--b) Agregar 3 nuevos actores.

--2. Actualizar datos:
--a) Modificar el presupuesto de la película insertada en el punto anterior.

UPDATE PELICULA SET PRESUPUESTO = 10 WHERE PELICULAID = 1691

 

--b) Cambiar la nacionalidad de uno de los actores insertados en el punto 1.




--3. Eliminar datos:
--a) Eliminar los personajes de la película y luego eliminar la película insertada en el punto 1

DELETE FROM PELICULA WHERE PELICULAID = 1691

--Consultas SQL
--a) Listar todos los títulos de las películas con su fecha de estreno.

SELECT
    TituloOriginal, 
    TituloLatam, 
    FechaEstreno
FROM Pelicula


--b) Mostrar los nombres y apellidos de los directores nacidos antes de 1970.

SELECT 
    NOMBRE, 
    APELLIDO 
FROM DIRECTOR 
WHERE FechaNac < '19700101'
ORDER BY Apellido ASC --ORDENADO

SELECT 
    NOMBRE, 
    APELLIDO 
FROM DIRECTOR 
WHERE FECHAFALL IS NULL  -- CONTROL DE NULO
ORDER BY Apellido ASC

--c) Obtener todos los estudios ordenados alfabéticamente de A a Z.

--d) Mostrar las películas cuyo presupuesto es mayor a la recaudación.

--e) Listar los actores nacidos después de 1990 sin fecha de fallecimiento.

--f) Listar los nombres de las películas y el nombre del director correspondiente.

SELECT 
    P.TITULOORIGINAL, 
    P.TITULOLATAM,
    D.APELLIDO,
    D.NOMBRE
FROM Pelicula P
INNER JOIN Director D ON D.DirectorID = P.DirectorID  --UNIR POR ID DE TABLAS


--g) Obtener las películas y mostrar su titulo original, fecha de estreno y el nombre del país al que pertenecen.