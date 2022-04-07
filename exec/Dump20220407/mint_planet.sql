CREATE DATABASE  IF NOT EXISTS `mint` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mint`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: mint
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

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
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planet` (
  `planet_id` bigint NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diameter` double DEFAULT NULL,
  `galaxy` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mass` double DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_cell` int DEFAULT NULL,
  PRIMARY KEY (`planet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
INSERT INTO `planet` VALUES (9,'“지구 유사도 95%! 강력한 유사 지구 후보”\r <br> 2019년 6월 발견된 외계 행성으로, 조용한 적색 왜성인 ‘티가든의 별’을 돌고 있다. 온도는 0~50도로 온화할 것으로 추측된다. 공전주기가 안정한 상태라서 바다가 존재할 가능성도 있다고. 지구 유사도(ESI)가 0.95로, 지구와 95% 비슷할 것으로 분석된다.',1.1,'Milky way galaxy',1.05,'Teegarden_b',25),(10,'“지구의 크기와 궤도까지 비슷한 유사 지구” <br>\r 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?',1.06,'Milky way galaxy',1.2,'Kepler_1649c',25),(11,'“지구에서 두번째로 가까운, 평화로운 유사 지구”\r <br> 모항성 로스 128 주위를 9.9일만에 공전하는 암석형 행성. 평균 온도는 약 8도로 지구와 비슷한 환경. 역대 발견된 가장 가까운 유사 지구 ‘프록시마 b’ 다음으로 두번째로 가까운 유사 지구. 거리는 2배 이상 멀지만, 오히려 생명체가 살기 더 좋은 쾌적한 환경이라고!',1.3,'Milky way galaxy',1.35,'Ross_128b',25),(12,'“수상가옥을 만들어 살 수 있는 행성” <br>\r 표면에 물이 존재하며, 생명이 살기 좋은 화씨 72도(섭씨22도) 정도의 기온을 가지고 있다. 지구처럼 대기권에 구름이 형성되어 있으며 지구와 같은 평범한 암석형 행성이 아니라 바다행성일 확률이 커서 바다를 좋아하는 사람들에게 인기가 많다고! 케플러-22b의 땅을 구매해 수상가옥을 지어보는 것은 어떨까?',2.4,'Milky way galaxy',36,'Kepler_22b',25),(13,'“지구에서 가장 가까운 유사지구”\r <br> 지구에서 약 4.2광년 떨어진 프록시마 켄타우리 항성 주위를 공전하는 행성. 현재까지 발견한 유사지구 중 가장 가깝다. 질량이 지구의 1.3배인 암석형 행성으로, 안정적인 대기권과 지구와 유사한 액체 상태의 바다가 존재할 가능성이 높을 것으로 추정된다고.. MINT의 최고인기행성',1.1,'Milky way galaxy',1.3,'Proxima_B',25);
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 14:05:43
