-- CONSULTAS CON JOIN (Combinaciones de tablas) - RESUELTO

--1- Obtener los actores y su pais de origen. Mostrar en la consulta apellido y nombre del actor, fecha  de nacimiento y nombre del pais. 
-- Para esto se debera hacer un join entre la tabla actores y la tabla paises.
-- Solo obtener los actores vivos y nacidos en la decada del 80 y solo mostrar los 10 actores mas jovenes de ese grupo.

SELECT TOP 10
	a.Apellido,
	a.Nombre,
	a.FechaNac,
	P.Pais
FROM Actor a
INNER JOIN Pais p ON a.PaisID = p.PaisID
WHERE a.FechaNac >= '19800101' AND a.FechaNac < '19900101' AND a.FechaFall IS NULL
ORDER BY a.FechaNac DESC


--2- Crear una consulta para obtener el titulo original, titulo en latinoamerica, la fecha de estreno de las peliculas,
-- el apellido y nombre del director, el nombre del estudio y el nombre del pais al que pertenece la pelicula. 
-- Ordenarlas por fecha de estreno de forma descendente.

SELECT 
	p.TituloOriginal,
	p.TituloLatam,
	p.FechaEstreno,
	d.Apellido AS 'Apellido Director',
	d.Nombre AS 'Nombre Director',
	e.Estudio, 
	pa.Pais 
FROM Pelicula p
INNER JOIN Director d ON p.DirectorID = d.DirectorID
INNER JOIN Estudio e ON p.EstudioID = e.EstudioID	
INNER JOIN Pais pa ON p.PaisID = pa.PaisID
ORDER BY p.FechaEstreno DESC

--3- Obtener los personajes de la saga "Volver al futuro" y tambien los nombres y apellidos de los actores que los interpretaron.
--	El filtro para obtener los personajes de dicha saga debera hacerse con el titulo de la pelicula.

SELECT 
	pe.Personaje,
	a.Apellido,
	a.Nombre
FROM Personaje pe
INNER JOIN Pelicula p ON pe.PeliculaID = p.PeliculaID
INNER JOIN Actor a ON pe.ActorID = a.ActorID
WHERE p.TituloLatam LIKE 'Volver al futuro%'

--4- crear una consulta para obtener las peliculas argentinas nominadas al oscar, para el filtro de pais utilizar el nombre del pais.
-- Mostrar las columnas tituloOriginal, sinopsis, fecha de estreno, nombre del genero, nombre del estudio y apellido y nombre del director.

SELECT
	p.TituloOriginal,
	p.Sinopsis,
	p.FechaEstreno,
	g.Genero,
	e.Estudio,
	d.Apellido AS 'Apellido Director',
	d.Nombre AS 'Nombre Director'
FROM Pelicula p
INNER JOIN Pais pa ON p.PaisID = pa.PaisID
INNER JOIN Genero g ON p.GeneroID = g.GeneroID
INNER JOIN Estudio e ON p.EstudioID = e.EstudioID
INNER JOIN Director d ON p.DirectorID = d.DirectorID
WHERE pa.Pais = 'Argentina' AND p.OscarNomin > 0
