

Para configurar un nuevo reenvío de puertos en tu router, necesitas especificar varios detalles que permitirán que las conexiones entrantes a tu red se dirijan a tu Raspberry Pi. Basándonos en los parámetros que has mencionado, aquí te explico cómo rellenar cada uno para el propósito de hacer accesible tu servidor web en la Raspberry Pi desde el exterior:

### Nombre
- **Descripción**: `raspberry` (esto es correcto; es solo un identificador para recordarte para qué es este reenvío de puertos).

### Protocolo
- **Descripción**: `TCP` (el tráfico web utiliza el protocolo TCP, así que esto es correcto).

### Dirección IP del host WAN
- **Descripción**: `0.0.0.0 ~ 0.0.0.0` (esto indica el rango de direcciones IP WAN entrantes permitidas para este reenvío. Al poner todas las direcciones en ceros, estás indicando que se aceptará cualquier dirección IP entrante, lo cual es lo deseado para un servidor web accesible públicamente).

### LAN Host (Dirección IP de tu Raspberry Pi)
- **Descripción**: Aquí debes ingresar la **dirección IP local de tu Raspberry Pi**. Puedes encontrarla ejecutando `hostname -I` en la terminal de tu Raspberry Pi o mirando en la lista de dispositivos conectados en la interfaz web de tu router. Será algo como `192.168.1.X`.

### Puerto WAN
- **Descripción**: Este es el puerto o rango de puertos que se abrirán al tráfico entrante en tu router. Para un servidor web estándar, usarías el puerto `80` para HTTP. Si planeas usar HTTPS, también querrías abrir el puerto `443`. Si solo estás abriendo un puerto, ambos lados del rango serán el mismo número, por ejemplo, `80 ~ 80`.

### Puerto de host LAN
- **Descripción**: Este es el puerto o rango de puertos en tu Raspberry Pi al que se dirigirá el tráfico entrante. Para un servidor web corriendo en el puerto estándar, también usarías `80` para HTTP. Si tu servidor web está configurado para escuchar en un puerto no estándar, este número sería diferente. Al igual que con el puerto WAN, si solo estás configurando un puerto, ambos lados del rango serán el mismo número, por ejemplo, `80 ~ 80`.

**Ejemplo de Configuración**:

- **Nombre**: raspberry
- **Protocolo**: TCP
- **Dirección IP del host WAN**: 0.0.0.0 ~ 0.0.0.0
- **LAN Host (Dirección IP de tu Raspberry Pi)**: 192.168.1.10 (ejemplo, reemplázalo con la IP real de tu Raspberry Pi)
- **Puerto WAN**: 80 ~ 80 (y/o 443 ~ 443 para HTTPS)
- **Puerto de host LAN**: 80 ~ 80 (y/o 443 ~ 443 para HTTPS)

Una vez hayas completado estos campos con la información correcta, guarda o aplica los cambios en tu router. Este proceso hará que cualquier tráfico dirigido a tu dirección IP pública en el puerto especificado se redirija a tu Raspberry Pi, permitiendo que tu servidor web sea accesible desde internet.