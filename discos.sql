-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2022 a las 02:37:43
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discos`
--

CREATE TABLE `discos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(2500) NOT NULL,
  `imagen` varchar(2500) NOT NULL,
  `requisitos` varchar(9000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `discos`
--

INSERT INTO `discos` (`id`, `nombre`, `imagen`, `requisitos`) VALUES
(2, 'DEAD ISLAND RIPTIDE DEFINITIVE EDITION', 'imagen.jpg', 'SO: Windows® 7 64-bit / Windows® 8 64-bit / Windows® 8.1 64-bit / Windows® 10 64-bit, Procesador: Intel® Core™ i5-2500 @3.3 GHz / AMD FX-8320 @3.5 GHz, Memoria: 4 GB de RAM, Gráficos: NVIDIA® GeForce® GTX 560 Ti / AMD Radeon™ HD 6870 (1GB VRAM), DirectX: Versión 11.'),
(6, 'RUST PC', '1654820741639_202211011174383_1.jpg', 'Los requisitos mínimos son Windows 7, procesador de 2 ghz, 4 GB de RAM (utilizables), tarjeta gráfica dedicada, versión 9.0 de DirectX y 8 GB de espacio libre en el disco duro.'),
(8, 'SKUL THE HERO SLAYER PARA PC', '1654814217306_imagen_2022-06-09_175420525.png', 'SO: Windows 7+ Procesador: Intel i5+ Memoria: 4 GB de RAM Gráficos: Nvidia 450 GTS / Radeon HD 5750 or better Almacenamiento: 500 MB de espacio disponible Notas adicionales: DirectX 9.1+ or OpenGL 3.2+:'),
(9, 'HOME SWEET HOME SURVIVE PC', '1654820741639_imagen_2022-06-09_192649780.png', 'Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 (64-bit Version) Procesador: Intel i3-7100 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 1060 6GB Red: Conexión de banda ancha a Internet Almacenamiento: 7 GB de espacio disponible');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `discos`
--
ALTER TABLE `discos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `discos`
--
ALTER TABLE `discos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
