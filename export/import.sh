#/bin/bash

# Database
db_name="fx"
file_name="../data/rates_db.sql"

mysqldump -u root -p $db_name < $file_name
