
redis_cache: redis-server config/redis_cache.conf
redis_socketio: redis-server config/redis_socketio.conf
redis_queue: redis-server config/redis_queue.conf

web: bench serve --port 8005

socketio: /home/eorchids/.nvm/versions/node/v14.15.0/bin/node apps/frappe/socketio.js

watch: bench watch

schedule: bench schedule
worker_short: bench worker --queue short 1>> logs/worker.log 2>> logs/worker.error.log
worker_long: bench worker --queue long 1>> logs/worker.log 2>> logs/worker.error.log
worker_default: bench worker --queue default 1>> logs/worker.log 2>> logs/worker.error.log

