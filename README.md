# Development Quickstart

1. `yarn` to install dependencies

2. `docker-compose up -d` to start postgres in docker container, detached

3. `yarn develop` to start strapi server

# Dumping and Restoring

## Dump local DB

To dump the local DB, ensure the Docker db container is running, then run `utils/pg_dump.sh`

## Restore to heroku

### Manual Restore

Upload to a public service, such as Amazon S3. Then sign the file:

`aws s3 presign s3://s3.mattcassara.com/backups/<file_name>`

Upload to Heroku using the Heroku CLI:

`heroku pg:backups:restore '<signed_url>' DATABASE_URL --app mattcassara-server --confirm mattcassara-server`

### Script Restore

Upload to a public service, such as Amazon S3. Then run `utils/heroku_restore.sh`, passing the file name as the argument. This script will automatically sign the file and restore to Heroku.
