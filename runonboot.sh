#!/bin/bash
cd /home/yudeeeth/Projects/neotab
/usr/bin/node server.js

# (bash /home/yudeeeth/Projects/neotab/runonboot.sh > /home/yudeeeth/Projects/neotab/runonboot.log &) &
# kill $( sudo netstat -ltnp | grep '55555' | awk '{print $7}' | grep -o '[0-9]*' )
cd