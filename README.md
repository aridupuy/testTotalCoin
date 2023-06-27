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
 
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

