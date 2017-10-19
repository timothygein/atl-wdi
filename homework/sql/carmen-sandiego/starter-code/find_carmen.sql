SELECT name FROM country WHERE region = 'Southern Europe' ORDER BY population ASC LIMIT 1;


SELECT language FROM countrylanguage WHERE countrycode = 'VAT';


SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage DESC;

SELECT name FROM country WHERE code = SMR

SELECT name FROM city WHERE countrycode = 'SMR';
SELECT * FROM city WHERE name LIKE 'Serr%';
SELECT name FROM country WHERE code = 'BRA';
SELECT name FROM city WHERE id = '211';

SELECT name, district, countrycode FROM city WHERE population = 91084;
