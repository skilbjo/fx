#/bin/bash

# Database
user="pi"
server="skilbjo.duckdns.org"
db_name="fx"
file_path="~/node/app/fx"
mbp_path="/Users/skilbjo/Code/Node/fx/data"

rsync -chavzP --stats $mbp_path $user@$server:$file_path