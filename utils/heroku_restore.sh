#!/usr/bin/env bash

# first dump the db and upload to aws
# then pass in the file name
# this will automatically sign and upload to Heroku

echo "Signing..."

SIGNED=$(aws s3 presign s3://s3.mattcassara.com/backups/$1)

echo "Restoring..."

heroku pg:backups:restore "$SIGNED" DATABASE_URL --app mattcassara-server --confirm mattcassara-server

echo "Done."