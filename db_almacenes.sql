-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-08-2020 a las 19:11:55
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_almacenes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ProductoId` int(255) NOT NULL,
  `Nombre` varchar(255) DEFAULT 'Producto',
  `Codigo` varchar(255) DEFAULT '4',
  `precio` float NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `Estado` int(2) DEFAULT 0,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ProductoId`, `Nombre`, `Codigo`, `precio`, `fecha_vencimiento`, `Estado`, `cantidad`) VALUES
(1, 'Gaseosa', '13213', 2500, '2020-08-30', 1, 8),
(2, 'arroz 1kg', '35487', 3600, '2020-08-28', 0, 8),
(10, 'Producto', '4', 0, '2020-09-01', 0, 0),
(11, 'Producto', '4', 0, '2020-09-04', 0, 0),
(12, 'Producto', '4', 0, '2020-08-27', 0, 0),
(13, 'Producto', '4', 0, '2020-09-05', 0, 0),
(14, 'Producto', '4', 0, '2020-08-25', 0, 0),
(15, 'asdsad', 'adasd', 25500, '2020-09-05', 0, 0),
(16, 'arroz chino', '1212332', 25000, '2020-08-26', 0, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ProductoId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ProductoId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
