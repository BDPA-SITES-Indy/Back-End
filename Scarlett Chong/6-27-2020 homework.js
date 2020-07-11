//INSERT INTO CarInventory a green 2005 Honda Civic from Japan.

INSERT INTO CarInventory (Company, Country, Model, Year, Color)
VALUES (Honda, Japan, Civic, 2005, Green);

//Write a SELECT statement that displays all the countries in “Brands” without duplicates

SELECT Country,
FROM Brands;

//Write the syntax for an INNER JOIN between the two tables using the ‘Country’ columns. Return columns Model and Year

SELECT Company, Country,
FROM CarInventory,
INNER JOIN Brands,
ON CarInventory.Country = Brands.Country;

//What rows will the above INNER JOIN produce?
The rows in the INNER JOIN will produce company and country rows.
