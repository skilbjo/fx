#/bin/bash

# Database
db_name="fx"
file_name="../data/rates_db.sql"

# Prod
user_name="pi"
server="skilbjo.duckdns.org"
pi_db_path="~/sql/coupon"
pass="root"

# Export from Pi, send the results back to local
## this is not working
ssh $user_name@$server "mysqldump -u root -p $db_name > $file_name"
