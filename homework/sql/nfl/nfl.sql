SELECT name FROM teams;

SELECT stadium, head_coach FROM teams;


SELECT head_coach FROM teams WHERE conference='AFC' AND division= 'South';
SELECT COUNT(*) FROM players;
SELECT name, head_coach FROM teams WHERE conference ='NFC' AND division ='North' OR conference='AFC' AND division='East';
SELECT name FROM players ORDER BY salary DESC LIMIT 50;


SELECT AVG(salary) FROM players;
SELECT name, position FROM players  WHERE salary > 10000000;
SELECT name FROM players ORDER BY salary DESC LIMIT 1;
SELECT name, position, salary FROM players  WHERE salary > 10000000 ORDER BY salary DESC;

SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

SELECT AVG(salary) FROM players WHERE position='DE';
SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';
SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'New York Giants';
SELECT players.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE '%Green Bay Packers%' ORDER BY salary ASC LIMIT 1;
