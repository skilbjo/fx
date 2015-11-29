#/bin/bash

# Database
mbp_path="/Users/skilbjo/Code/Node/fx/data"
db_name="fx"
file_name="../data/rates_db.sql"

# Prod
user="pi"
server="skilbjo.duckdns.org"
pi_app_path="~/node/app/fx/data"
pi_data=$pi_app_path/$file_name

# MySQL export on Pi server
ssh $user@$server "mysqldump -u root -p $db_name > $pi_data"

# Rsync back to local
rsync -chavzP --stats $user@$server:$pi_data $mbp_path