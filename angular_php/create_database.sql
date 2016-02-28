delimiter $$

CREATE DATABASE `yross_polls` /*!40100 DEFAULT CHARACTER SET latin1 */$$

delimiter $$

CREATE TABLE `items` (
  `iditems` int(11) NOT NULL AUTO_INCREMENT,
  `idpoll` int(11) NOT NULL,
  `title` varchar(1024) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`iditems`),
  KEY `idpoll` (`idpoll`),
  CONSTRAINT `items_poll_id_fk` FOREIGN KEY (`idpoll`) REFERENCES `polls` (`idpoll`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `polls` (
  `idpoll` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1024) NOT NULL,
  `active` int(11) NOT NULL DEFAULT '0',
  `total_votes` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idpoll`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1$$
