- Poner dietpi en microsd con baenalatcher
- poner microsd en raspberry y encenderla con cable ethernet conectado
- Buscar la ip de la raspberry para posteriormente conectarme a ella mediante ssh
  -- sudo nmap -sn 192.168.1.0/24
- ssh root@192.168.1.134   (ip raspberry)
- Instalar nodejs y OpenSSH
- ssh-keygen -R 192.168.1.134 (ip raspberry)
- scp -r "README.md" root@192.168.1.134:/root
- scp -r "server-media-ultimate-react-three-espinaco" root@192.168.1.134:/root (proyecto backend)
- scp -r "ultimate-react-three-espinaco" root@192.168.1.134:/root (proyecto frontend)
  -- (otra opcion) scp -r "build" root@192.168.1.134:/root/ultimate-react-three-espinaco
===============================================================================
- cd server-media-ultimate-react-three-espinaco ( tambien valido para ultimate-react-three-espinaco )
- npm install -g yarn
- yarn (aka yarn install)
- yarn start
(ultimate-react-three-espinaco): 
- npm install -g serve
- yarn build
- cd build
- sudo serve -s build -l 80
===============================================================================

Ejecuciones de aplicaciones en segundo plano (README 6)

- nohup sudo serve -s build -l 80 > myapp.log 2>&1 & 
  -- (Aquí, `> myapp.log 2>&1` redirige la salida estándar y los errores al archivo `myapp.log`. El símbolo `&` al final del comando   hace que la ejecución sea en el fondo)

- ps aux | grep serve
  -- (Estos comandos te mostrarán los procesos activos relacionados con `serve`.)

- tail -f myapp.log
  -- (El comando `tail -f myapp.log` te permite ver los logs en tiempo real. Si solo deseas ver los últimos eventos registrados sin seguir los nuevos, puedes omitir el `-f`)

- kill $(pgrep -f 'serve -s build -l 80')
  -- Si necesitas detener la aplicación, primero localiza el ID del proceso (PID) con `pgrep` y luego usa `kill`:
  -- (Este comando buscará el PID del proceso que coincide con tu comando de `serve` y lo terminará)


- Aqui pondremos comandos que utilice en mi proyecto:

- nohup sudo serve -s build -l 80 > myappfrontend.log 2>&1 &
- nohup yarn start > myappbackend.log 2>&1 &

- ps aux | grep serve
- ps aux | grep node

- tail -f myappfrontend.log
- tail -f myappbackend.log

- kill $(pgrep -f 'serve -s build -l 80')
- kill $(pgrep -f 'node app.js')

===============================================================================


Para mantener actualizada la lista de videos:

- Crear carpeta media y meter los videos nuevos dentro de la carpeta "4K Video Downloader"

- scp -r "media" root@192.168.1.134:/root/server-media-ultimate-react-three-espinaco

- Y ya con eso he pasado los nuevos videos a mi servidor

- copiar y pegar la carpeta media de  "4K Video Downloader" en la carpeta media de "ultimate-server-react-three-espinaco" 
  -- En google drive para tener actualizada la carpeta media en google drive
  -- en mi mac para tener actualizado esa carpeta en mi proyecto del mac.

- Pasarme la carpeta media por scp desde mi raspberry a mi portatil ubuntu y desde ahi al disco duro y al drive para actualizar con todos los videos

