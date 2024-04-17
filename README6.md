Si prefieres no instalar nada adicional en tu Raspberry Pi, puedes utilizar el comando `nohup` junto con redirección de salida para lograr mantener tu aplicación corriendo y poder ver los logs después. Aquí te explico cómo hacerlo:

### Usando `nohup` y redirección de salida

1. **Ejecutar tu aplicación con `nohup`**:
   Utiliza `nohup` para ejecutar tu aplicación en el fondo y redirige tanto la salida estándar como la salida de error a un archivo de log. Esto te permitirá revisar los logs en cualquier momento.
   
   ```bash
   nohup sudo serve -s build -l 80 > myapp.log 2>&1 &
   ```

   Aquí, `> myapp.log 2>&1` redirige la salida estándar y los errores al archivo `myapp.log`. El símbolo `&` al final del comando hace que la ejecución sea en el fondo.

2. **Verificar que el proceso está corriendo**:
   Puedes verificar que tu aplicación está corriendo utilizando `ps` o `pgrep`:
   
   ```bash
   ps aux | grep serve
   ```

   o

   ```bash
   pgrep -a serve
   ```

   Estos comandos te mostrarán los procesos activos relacionados con `serve`.

3. **Ver los logs**:
   Para ver los logs de tu aplicación, puedes utilizar `cat` o `tail`:
   
   ```bash
   tail -f myapp.log
   ```

   El comando `tail -f myapp.log` te permite ver los logs en tiempo real. Si solo deseas ver los últimos eventos registrados sin seguir los nuevos, puedes omitir el `-f`.

4. **Detener tu aplicación**:
   Si necesitas detener la aplicación, primero localiza el ID del proceso (PID) con `pgrep` y luego usa `kill`:
   
   ```bash
   kill $(pgrep -f 'serve -s build -l 80')
   ```

   Este comando buscará el PID del proceso que coincide con tu comando de `serve` y lo terminará.

Este método es bastante simple y no requiere instalar herramientas adicionales, lo que lo hace útil en situaciones donde no quieres o no puedes modificar el sistema instalando nuevo software.