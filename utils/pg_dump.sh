#!/usr/bin/env bash

# ensure docker container is running 
# we can't docker exec and dump that way - it dumps the wrong DB
# args for port and db name should match those in our env file

pg_dump -h localhost -p 5050 -U mattcassara-postgres -Fc > backups/dump_`date +%d-%m-%Y"_"%H_%M_%S`.dump