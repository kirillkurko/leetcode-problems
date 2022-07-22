# Write your MySQL query statement below
SELECT class
FROM Courses
GROUP BY class
HAVING count( distinct student ) >= 5 ;
