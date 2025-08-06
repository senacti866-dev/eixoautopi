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
-- Table structure for table `tb_produto`
--

DROP TABLE IF EXISTS `tb_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produto` (
  `Pro_ID` int NOT NULL AUTO_INCREMENT,
  `Pro_CodigoFabricante` int NOT NULL,
  `Pro_Nome` varchar(45) NOT NULL,
  `Pro_Descricao` varchar(45) NOT NULL,
  `Pro_Aplicacao` varchar(45) NOT NULL,
  `Pro_Preco` decimal(10,2) NOT NULL,
  `Pro_Estoque` int NOT NULL,
  `Pro_LinkProduto` varchar(2083) NOT NULL,
  `Pro_CodigoOriginal` varchar(45) NOT NULL,
  `For_ID` int NOT NULL,
  PRIMARY KEY (`Pro_ID`),
  KEY `For_ID` (`For_ID`),
  CONSTRAINT `tb_produto_ibfk_1` FOREIGN KEY (`For_ID`) REFERENCES `tb_fornecedor` (`For_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produto`
--

LOCK TABLES `tb_produto` WRITE;
/*!40000 ALTER TABLE `tb_produto` DISABLE KEYS */;
INSERT INTO `tb_produto` VALUES (22,1001,'Filtro de Óleo','Filtro para motor 1.6','Motores 1.6 flex',45.90,120,'https://www.pitstop.com.br/filtro-de-oleo-moto-tecfil-psl638-honda-kawasaki-yamaha-950528/p','FO-1.6-FLEX',1),(23,1002,'Pastilha de Freio','Pastilha dianteira cerâmica','Veículos sedan',89.99,60,'https://www.pitstop.com.br/pastilha-freio-fras-grand-cherokee-19982010-diant-frasle/p','PF-CER-SDN',1),(24,1003,'Amortecedor','Amortecedor dianteiro','SUVs compactos',199.00,30,'https://www.pitstop.com.br/amortecedor-corolla-19982002-diant-direita-cofap-gp35991m/p','AM-D-SUV',2),(25,1004,'Correia Dentada','Correia para motor 2.0','Motores 2.0 turbo',120.50,45,'https://www.pitstop.com.br/amortecedor-corolla-19982002-diant-direita-cofap-gp35991m/p','CD-2.0-TB',3),(26,1005,'Velas de Ignição','Jogo com 4 velas iridium','Motores a gasolina',160.75,75,'https://www.pitstop.com.br/vela-ignicao-pcx-150-kawasaki-vulcan-vn-900-sh-150i-yamha-xvs-950-midnight-star-ngk/p','VI-IR-GSL',4),(27,1006,'Bateria Automotiva','Bateria 12V para carros','Carros populares',350.90,50,'https://www.pitstop.com.br/bateria-moto-ht12a-bs-burgman-400-next250-heliar-10ah-selada-949784/p','BA-12V',5),(28,1007,'Lâmpada de Farol','Lâmpada de xenônio 55W','Faróis de carros',70.40,200,'https://www.pitstop.com.br/lampada-farol-halogena-m5-philips-standard-12v-moto-35w-981262/p','LF-XEN-55W',1),(29,1008,'Kit Embreagem','Kit com disco, platô e rolamento','Carros de passeio',250.99,80,'https://www.pitstop.com.br/kit-embreagem-cambio-manual-atego-oh-1519-of-1418-of-1519-lo-916-sachs/p','KE-PASS',3),(30,1009,'Motor de Arranque','Motor de arranque 12V','Carros e caminhonetes',320.00,40,'https://www.pitstop.com.br/motor-arranque-partida-sprinter-311-415-515-original-bosch-1986s00888-291973/p','MA-12V',4),(31,1010,'Radiador','Radiador de alumínio','Veículos com motor 1.8',450.75,25,'https://www.pitstop.com.br/radiador-r-380-r-420-r-470-r-480-r-440-magneti-marelli/p','RD-1.8',5),(32,1011,'Cabo de Vela','Cabo de vela para ignição','Motores a gasolina',30.90,300,'https://www.pitstop.com.br/cabo-vela-doblo-idea-palio-punto-siena-1-6-1-8-16v-e-torq-563192/p','CV-GSL',2),(33,1012,'Tanque de Combustível','Tanque de combustível para carros compactos','Carros populares',650.50,10,'https://www.pitstop.com.br/tanque-combustivel-55l-parati-saveiro-gol-voyage-igasa/p','TC-CMP',2),(34,1013,'Suspensão Dianteira','Suspensão dianteira para SUV','SUVs e picapes',550.80,15,'https://www.pitstop.com.br/suspensao-dianteiro-traseiro-direito-esquerdo-outros-axios-534-5547/p','SD-SUV',2),(35,1014,'Bico Injetor','Bico injetor para motores 1.0','Carros pequenos',180.40,100,'https://www.pitstop.com.br/bico-injetor-od-od-odpb-od-odplus-2003-ate-bosch/p','BI-1.0',1),(36,1015,'Pneu 17\"','Pneu aro 17 para carros de passeio','Carros e SUVs',299.99,60,'https://www.pitstop.com.br/pneu-dianteiro-60-100-17-biz-dream-pop-irado-city-cinborg-1037325/p','PNEU-17',4);
/*!40000 ALTER TABLE `tb_produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-05 21:43:30
