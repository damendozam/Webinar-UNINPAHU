create table people(
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code varchar(30),
    name varchar(30),
    type varchar(10),
    status int,
    picture varchar(100),
    mail varchar(30),
    password varchar(20),
    address varchar(30),
    cel varchar(15),
    preferences varchar(100),
    age int
);

create table classes (
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code varchar(30),
    limitClass int,
    students int,
    teachers int,
    name varchar(50),
    date int,
    time varchar(15),
    during int,
    location varchar(30),
    color varchar(20)
);

create table peopleClass(
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idPeople int UNSIGNED,
    idClass int UNSIGNED,

    constraint fkPeople
    foreign key (idPeople)
    references people(id)
    on delete no action,

    constraint fkClass
    foreign key (idClass)
    references classes(id)
    on delete no action
);


INSERT INTO people (id,code,name,type,status,picture,mail,password,address,cel,preferences,age)
    VALUES (0,
    'PL-230', 
    'Diego Andrés Mendoza Mora',
    'pract',
    1,
    'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
    'damendozam@gmail.com',
    'behbcebeyc',
    'hvyvy',
    '3022573334',
    'njdbndueue',
    28
    );