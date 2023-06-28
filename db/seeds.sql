USE employees_db;

INSERT INTO department (name)
VALUES ('Marketing'),
('Legal'),
('Crisis Management'),
('Design');

INSERT INTO role (title, salary, department_id)
VALUES ('General Counsel', 200000, 2),
('Director of Marketing', 150000, 1),
('Attorney', 100000, 2),
('Director of Crisis Management', 120000, 3),
('Creative Director', 130000, 4),
('Account Executive', 80000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Hannah', 'Wolfson', 2, NULL),
('Conrad', 'Manaugh', 4, NULL),
('Jonathan', 'Silverstein', 3, 5),
('Quinn', 'Baker', 3, 5),
('Clare', 'McGraw', 1, NULL),
('Kaylie', 'Carpenter', 5, NULL),
('Shaunmei', 'Lim', 6, 1),
('Allison', 'Pujol', 6, 1);