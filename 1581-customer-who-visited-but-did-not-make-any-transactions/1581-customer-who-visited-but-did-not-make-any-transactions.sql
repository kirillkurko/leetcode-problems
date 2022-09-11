# Write your MySQL query statement below
SELECT v.customer_id, COUNT(1) AS count_no_trans FROM Visits AS v
LEFT OUTER JOIN Transactions AS t 
ON v.visit_id = t.visit_id
WHERE t.visit_id IS Null
GROUP BY v.customer_id;