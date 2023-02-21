INSERT INTO list_employee(id, first_name, last_name, role_id, manager_id)
VALUES (1, John, Peach, 23, 10),
        ( 2, Mary, Blueberry, 27, 10),
        ( 10, Jerry, Bananas, 30, 11);

INSERT INTO department (id, name_dept)
VALUES (3, Head of Math),
        (4, Algebra I),
        (5, Geomerty II);

INSERT INTO employee_role(id, title, salary, department_id)
VALUES (1, teacher, 60000, 4),
        (2, TA, 30000, 5),  
        (10, director, 90000, 3);

        