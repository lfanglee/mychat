-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: nodesample
-- ------------------------------------------------------
-- Server version	5.7.9-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `msg`
--

DROP TABLE IF EXISTS `msg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msg` (
  `msgind` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(20) NOT NULL,
  `sendTime` varchar(20) NOT NULL,
  `content` text,
  PRIMARY KEY (`msgind`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msg`
--

LOCK TABLES `msg` WRITE;
/*!40000 ALTER TABLE `msg` DISABLE KEYS */;
INSERT INTO `msg` VALUES (1,'value1','value2','value3'),(2,'value1','value2','value3'),(3,'\n            fang \n ','18:11:37','1111111111'),(4,'\n            fang \n ','17:00:42','方法反反复复凤飞飞反复'),(5,'\n            test \n ','17:00:52','大师傅'),(6,'\n            test \n ','17:01:02','发发发'),(7,'\n            test \n ','19:42:50','ffffffffffff'),(8,'\n            test \n ','22:14:48','asdadad'),(9,'\n            test \n ','22:15:05','sdfsadf'),(10,'\n            test \n ','22:17:01','12213123'),(11,'\n            test \n ','22:22:25','wefrawfgafa');
/*!40000 ALTER TABLE `msg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `UserName` varchar(64) NOT NULL COMMENT '用户名',
  `UserPass` varchar(64) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'Wilson','abcd'),(2,'fang','698d51a19d8a121ce581499d7b701668'),(3,'test','202cb962ac59075b964b07152d234b70'),(6,'chat','bcbe3365e6ac95ea2c0343a2395834dd'),(7,'test2','c4ca4238a0b923820dcc509a6f75849b'),(8,'test3','c4ca4238a0b923820dcc509a6f75849b'),(9,'test4','a87ff679a2f3e71d9181a67b7542122c'),(10,'test5','c20ad4d76fe97759aa27a0c99bff6710'),(11,'test6','1679091c5a880faf6fb5e6087eb1b2dc'),(12,'test7','8f14e45fceea167a5a36dedd4bea2543'),(13,'test8','c9f0f895fb98ab9159f51fd0297e236d');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-23  1:29:31
