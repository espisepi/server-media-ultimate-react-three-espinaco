Para desplegar una aplicación React en una Raspberry Pi que ejecuta DietPi, usar NGINX como servidor web y habilitar HTTPS con un certificado SSL, puedes seguir estos pasos. Supondré que tienes acceso básico a tu Raspberry Pi y conocimientos mínimos sobre cómo usar la línea de comandos.

### Paso 1: Preparar la Raspberry Pi

1. **Instalar DietPi**: Asegúrate de que tu Raspberry Pi esté corriendo DietPi. Si necesitas instalarlo, puedes descargar la imagen de [la página oficial de DietPi](https://dietpi.com/) y seguir las instrucciones para instalarla en tu tarjeta SD.

2. **Conectar a Internet**: Conecta tu Raspberry Pi a Internet mediante Ethernet o WiFi.

3. **Acceder a la Raspberry Pi**: Puedes acceder a tu Raspberry Pi mediante SSH. El usuario predeterminado es `root` y la contraseña es `dietpi`.

### Paso 2: Instalar NGINX y Node.js

1. **Actualizar el sistema**:
   ```bash
   apt update && apt upgrade
   ```

2. **Instalar NGINX**:
   ```bash
   apt install nginx
   ```

3. **Instalar Node.js**:
   - Puedes instalar Node.js desde los repositorios de NodeSource para obtener una versión más reciente:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
     apt install -y nodejs
     ```

### Paso 3: Configurar tu dominio

1. **Configura los registros DNS**: Ingresa a tu cuenta de Namecheap y configura los registros A para que apunten a la dirección IP pública de tu Raspberry Pi.

### Paso 4: Obtener un certificado SSL con Let's Encrypt

1. **Instalar Certbot**:
   ```bash
   apt install certbot python3-certbot-nginx
   ```

2. **Obtener y configurar el certificado SSL**:
   ```bash
   certbot --nginx -d sepinaco.com -d www.sepinaco.com
   ```
   Sigue las instrucciones en pantalla. Certbot modificará automáticamente tu configuración de NGINX para usar HTTPS.

   (Si no funciona, comprobar que este comando apunta a la ip de la raspberry (aka a la ip publica de mi internet que es la que redirijo en mi router a la raspberry))
   - dig +short sepinaco.com

### Paso 5: Desplegar tu aplicación React

1. **Construye tu aplicación React**:
   - Navega a la carpeta de tu proyecto en tu máquina local y ejecuta:
     ```bash
     npm run build
     ```
   - Esto generará una carpeta `build` con los archivos estáticos.

2. **Transfiere tu aplicación a la Raspberry Pi**:
  - Puedes usar `scp` para transferir la carpeta `build` desde tu máquina local a la Raspberry Pi:
     ```bash
     scp -r build/* root@192.168.1.134:/var/www
     ```

3. **Configura NGINX para servir tu aplicación React**:
   
   (
    ======= ESTO NO LO HACEMOS PORQUE USAMOS LA CONFIGURACION POR DEFECTO ===================
    - Edita el archivo de configuración de NGINX para tu dominio, por ejemplo, `/etc/nginx/sites-available/default` y modifica el bloque `server` para servir los archivos estáticos:
     ```nginx
     server {
         listen 80;
         listen [::]:80;
         server_name sepinaco.com www.sepinaco.com;

         location / {
             root /var/www/html;
             try_files $uri /index.html;
         }
     }
     ```

    - Reinicia NGINX para aplicar los cambios:
     ```bash
     systemctl restart nginx
     ```
    ======= FIN ESTO NO LO HACEMOS PORQUE USAMOS LA CONFIGURACION POR DEFECTO ===================
   )

### Paso 6: Verifica tu despliegue

1. **Abre un navegador y ve a `https://sepinaco.com`**. Deberías ver tu aplicación React corriendo con una conexión segura HTTPS.

Con estos pasos, deberías tener tu aplicación React funcionando en tu Raspberry Pi con HTTPS habilitado, usando NGINX como servidor web.