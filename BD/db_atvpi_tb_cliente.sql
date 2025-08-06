-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_atvpi
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_cliente`
--

DROP TABLE IF EXISTS `tb_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cliente` (
  `Cli_ID` int NOT NULL AUTO_INCREMENT,
  `Cli_Nome` varchar(60) NOT NULL,
  `Cli_Senha` varchar(255) NOT NULL,
  `End_ID` int NOT NULL,
  `Ema_ID` int NOT NULL,
  `Tel_ID` int NOT NULL,
  `Ins_CNPJ` varchar(50) NOT NULL,
  PRIMARY KEY (`Cli_ID`),
  KEY `End_ID` (`End_ID`),
  KEY `Ema_ID` (`Ema_ID`),
  KEY `Tel_ID` (`Tel_ID`),
  KEY `Ins_CNPJ` (`Ins_CNPJ`),
  CONSTRAINT `tb_cliente_ibfk_1` FOREIGN KEY (`End_ID`) REFERENCES `tb_endereco` (`End_ID`),
  CONSTRAINT `tb_cliente_ibfk_2` FOREIGN KEY (`Ema_ID`) REFERENCES `tb_email` (`Ema_ID`),
  CONSTRAINT `tb_cliente_ibfk_3` FOREIGN KEY (`Tel_ID`) REFERENCES `tb_telefone` (`Tel_ID`),
  CONSTRAINT `tb_cliente_ibfk_4` FOREIGN KEY (`Ins_CNPJ`) REFERENCES `tb_inscricao` (`Ins_CNPJ`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cliente`
--

LOCK TABLES `tb_cliente` WRITE;
/*!40000 ALTER TABLE `tb_cliente` DISABLE KEYS */;
INSERT INTO `tb_cliente` VALUES (6,'Arfreios Pecas Diesel','$2y$10$XDRH1eqXgW9S8V.7lAMc4O9PwmUoanTEPVrL8KMJvMAuxslevru06',16,17,16,'01431159000123'),(7,'Rei Pecas','$2y$10$y064sX5dbKEKEzqJd2LnY.SLTsgkjsOVuZaVfszGvMpVWH0BgwbQO',17,18,17,'5879749646');
/*!40000 ALTER TABLE `tb_cliente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-05 21:43:29
