-- Active: 1658624429287@@35.226.146.116@3306@silveira-21814745-luiz-azevedo
CREATE TABLE case3_Product (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255)
);

CREATE TABLE case3_Tags (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) 
);

CREATE TABLE case3_Products_Tags (
    id_product VARCHAR(255) NOT NULL,
    id_tag VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_product) REFERENCES case3_Product(id),
    FOREIGN KEY(id_tag) REFERENCES case3_Tags(id)
);

SELECT * FROM `case3_Product` WHERE name LIKE '%Camisa%';