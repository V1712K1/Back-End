-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Maio-2021 às 15:41
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `stand`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `brandmodel` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `comments` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`comments`)),
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cars`
--

INSERT INTO `cars` (`id`, `seller_id`, `brandmodel`, `description`, `price`, `url`, `views`, `images`, `comments`, `tags`) VALUES
(1, 1, 'Ferrari', '458 Italia', '250000', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ultimatespecs.com%2Fpt%2Fcar-specs%2FFerrari%2F35710%2FFerrari-458-Italia-.html&psig=AOvVaw1ECq9rYsun_L7ARawSkMIs&ust=1621464011895000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDN8qam1PACFQAAAAAdAAAAABAD', 3, '[\"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ultimatespecs.com%2Fpt%2Fcar-specs%2FFerrari%2F35710%2FFerrari-458-Italia-.html&psig=AOvVaw1ECq9rYsun_L7ARawSkMIs&ust=1621464011895000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDN8qam1PACFQAAAAAdAAAAABAD\"]', '[\"Super Fast\"]', '[\"Vermelho\",\"Exotico\"]'),
(3, 1, 'Koenigsegg', 'Agera R', '1500000', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ultimatespecs.com%2Fbr%2Fcarros-ficha-tecnica%2FKoenigsegg%2F38755%2FKoenigsegg-Agera-R.html&psig=AOvVaw2KxJ2GfkTczNyprRNfNePR&ust=1621464474492000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjX-IKo1PACFQA', 2, '[\"https://www.ultimatespecs.com/cargallery/59/5183/w400_Koenigsegg-Agera-2.jpg\"]', '[\"Super Fast\"]', '[\"Branco\",\"Exotico\"]'),
(4, 2, 'Audi', 'RS4', '90000', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fauto-drive.pt%2F2020%2F10%2F02%2Fabt-puxa-pelo-lado-feroz-da-audi-rs4-avant%2F&psig=AOvVaw2MdMpQDGI2FXxCLgMsdVjQ&ust=1621442275092000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD70qjV0_ACFQAAAAAdAAAAABAE', 1, '[\"https://www.planetcarsz.com/assets/uploads/6964937961eb825847abda468c847cf9.jpg\"]', '[\"Family Supercar\"]', '[\"Cinzento\",\"Desportivo\"]');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
