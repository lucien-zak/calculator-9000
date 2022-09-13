-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 13 sep. 2022 à 15:26
-- Version du serveur : 5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `calculator`
--

-- --------------------------------------------------------

--
-- Structure de la table `calculator9000`
--

CREATE TABLE `calculator9000` (
  `id_calcul` int(11) NOT NULL,
  `operations` text NOT NULL,
  `results` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `calculator9000`
--

INSERT INTO `calculator9000` (`id_calcul`, `operations`, `results`, `created_at`) VALUES
(62, '12+3=', '15', '2022-09-13 15:21:09');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `calculator9000`
--
ALTER TABLE `calculator9000`
  ADD PRIMARY KEY (`id_calcul`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `calculator9000`
--
ALTER TABLE `calculator9000`
  MODIFY `id_calcul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
