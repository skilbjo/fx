begin;
  create database fx;
commit;

begin;
  create table rates (
    date      date,
    currency  text,
    rate      decimal(10,2)
  );
commit;

