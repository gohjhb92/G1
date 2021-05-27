

use sgus4b9g1;

show tables;



create table security (
    security_id int,
    security_type varchar(100),
    security_name varchar(100),
    primary key (security_id)
);


create table transaction (
    user_id int,
    txn_type varchar(100),
    txn_id int,
    txn_amt float,
    security_id int,
    units int,
    unit_price float,
    time_stamp timestamp,

    primary key (txn_id)
);