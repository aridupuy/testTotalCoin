# Como Ejecutar la app

Tenemos que tener instalado docker

En la raiz del proyecto ejecutamos el comando 
```
  $ docker compose up 
```

## Los 4 contenedores 
- PostgresSql -- pg_container 
- Pgadmin4    -- pgadmin4_container
- Apache webServer --  webServer
- React      -- react-ui
 
   
  #### Se ejecuta la app desde 
  Abrir [http://localhost:3000](http://localhost:3000) en el browser.
  
  #### Se genera una api backend
  Abrir [http://localhost:8080](http://localhost:8080) en el browser.
  
  #### Acceso pgAdmin4
  Abrir [http://localhost:5050](http://localhost:5050) en el browser.
  **La base de datos postgres se ejecuta en el puerto 5432**

## envvars
 ```
  $ touch backend/TotalCoin/.env
```
**dejo las variables para este ejemplo!**
```.env 
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:Sd/Zu6sqaYHQrTfUrIUAXq12xWYpMqiWbpCktutGLE0=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=totalcoin
DB_USERNAME=myUser
DB_PASSWORD=UnPassword

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

