-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema perfumer
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema perfumer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `perfumer` DEFAULT CHARACTER SET utf8 ;
USE `perfumer` ;

-- -----------------------------------------------------
-- Table `perfumer`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `perfumer`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `perfumer`.`perfumes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `perfumer`.`perfumes` (
  `perfumeId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fragranceFamily` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `season` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `description` VARCHAR(500) NULL,
  `imageUrl` VARCHAR(500) NULL,
  PRIMARY KEY (`perfumeId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `perfumer`.`basket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `perfumer`.`basket` (
  `idbasket` INT NOT NULL,
  `users_userId` INT NOT NULL,
  `perfumes_perfumeId` INT NOT NULL,
  `quantity` INT NULL DEFAULT 1,
  PRIMARY KEY (`idbasket`),
  INDEX `fk_basket_users_idx` (`users_userId` ASC) VISIBLE,
  INDEX `fk_basket_perfumes1_idx` (`perfumes_perfumeId` ASC) VISIBLE,
  CONSTRAINT `fk_basket_users`
    FOREIGN KEY (`users_userId`)
    REFERENCES `perfumer`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_basket_perfumes1`
    FOREIGN KEY (`perfumes_perfumeId`)
    REFERENCES `perfumer`.`perfumes` (`perfumeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES ("Eau De Toilette N°121","Floral","Women","Spring/Summer",65,"Feminine Sophisticated with notes of Roses, Raspberry and Vanilla","https://artfin.tn/uploads/produits/1bf223e537afaf379cafd89b60acd8a8.jpg")

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES ("Eau De Toilette N°108","Floral","Women","Spring/Summer",65,"Fresh Happy sensual with notes of Rose , freesia, Musc and Patchouli. ","https://artfin.tn/uploads/produits/78870f1914c4685ed255f576f375d0da.jpg")

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES ("Eau De Toilette N°104","Woody","Women","Fall/Winter",65,"Powerful Woody scent with notes of Jasmin and Amber","https://artfin.tn/uploads/produits/ec645a5b93e060a5cec74bd8213ab9dc.jpg")

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES ("Eau De Toilette N°316","Fresh","Men","Spring/Summer",65,"Fresh and addictive with notes of Bergamot and Tonka beans","https://artfin.tn/uploads/produits/03efef6ef03b5a1f5b206534d0d5f2ef.jpg")

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES ("Eau De Toilette N°502","Woody","Unisex","Fall/Winter",65,"Woody unisex perfume with notes of Peach, Pepper and Oud","https://artfin.tn/uploads/produits/e74efac792a66bd382754caaa92900e7.jpg")

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

-- INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description,imageUrl)
-- VALUES (?,?,?,?,65,?,?)

