#!/usr/bin/env bash

# ensure docker container is running 
# we can't docker exec and dump that way - it dumps the wrong DB
# args for port and db name for pg_dump should match those in our env file

BACKUPS_DIR="/Users/matt/Development/website/mattcassara-server/backups"
FILENAME=dump_`date +%d-%m-%Y"_"%H_%M_%S`.dump

echo "Dumping database..."

pg_dump -h localhost -p 5050 -U mattcassara-postgres -Fc > $BACKUPS_DIR/$FILENAME

echo "Uploading to AWS... "

aws s3 cp $BACKUPS_DIR/$FILENAME s3://s3.mattcassara.com/backups/

echo "Signing..."

SIGNED=$(aws s3 presign s3://s3.mattcassara.com/backups/$FILENAME)

echo "Restoring..."

heroku pg:backups:restore "$SIGNED" DATABASE_URL --app mattcassara-server --confirm mattcassara-server

echo "Migration successful."