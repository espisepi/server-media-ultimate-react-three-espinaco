=============================

sudo apt update
sudo apt install nmap

ip addr show
ifconfig

sudo nmap -sn 192.168.1.0/24

===============================

ssh root@192.168.1.134   (ip raspberry)

===============================

scp -r "TRAPANI - LA ULTIMA CENA (VIDEOCLIP) Prod. Delson Aravena.mp4" root@192.168.1.134:/root

===============================

pwd

===============================

mv ~/Descargas/archivo.txt ~/Documentos/

mv archivo.txt Documentos/nuevo_archivo.txt

===============================

ssh-keygen -R 192.168.1.134 (ip raspberry)

===============================

Abrir puertos raspberry:

sudo apt update

sudo apt install ufw

sudo ufw enable

sudo ufw allow 3000

sudo ufw allow 80

sudo ufw allow 22 (Importante para la conexion ssh xD)

sudo ufw status


===============================

Abrir puertos firewall router: README5.md

Desactivar Control de puertos: Router (ponner en navegador 192.168.1.1) -> Red Local -> LAN -> Control de puerto

===============================

Tuve un problema de que un dia me podia conectar a la raspberry por medio de ssh y al dia siguiente no me dejaba. El fallo era que ejecute en la raspberry "sudo apt install ufw" "sudo ufw enable" "sudo ufw allow 3000" y se me olvido poner "sudo ufw allow 22" para dejar abierto el puerto 22 que es el de ssh. Por lo tanto ya lo tengo bloqueado en la raspberry y ya no puedo acceder a ella xD ) Tengo que borrar el sistema operativo y volverlo a instalar desde la tarjeta micro sd xD.

===============================

Tengo el siguiente problema al intentar acceder a mi raspberry pi con dietpi: joseangel@Joses-MacBook-Pro media % scp -r "TRAPANI - LA ULTIMA CENA (VIDEOCLIP) Prod. Delson Aravena.mp4" root@192.168.1.134:/
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:Wju2+g39lQEU3wUvn2cgx4zrI4r7lkWsMBuu3g/UMt8.
Please contact your system administrator.
Add correct host key in /Users/joseangel/.ssh/known_hosts to get rid of this message.
Offending ED25519 key in /Users/joseangel/.ssh/known_hosts:1
Host key for 192.168.1.134 has changed and you have requested strict checking.
Host key verification failed.
scp: Connection closed

Este mensaje de error indica que la clave del host SSH para la dirección IP `192.168.1.134` ha cambiado desde la última vez que te conectaste, lo cual es detectado como un posible problema de seguridad. Esto puede suceder por varias razones legítimas, como reinstalar el sistema operativo en la Raspberry Pi, cambiar la configuración de SSH, o simplemente reinstalar el servidor SSH. 

Sin embargo, el mensaje también advierte sobre la posibilidad de un ataque de "man-in-the-middle", donde alguien podría estar intentando interceptar tu conexión. Si estás seguro de que el cambio en la clave del host es legítimo y no una amenaza, puedes resolver este problema eliminando la clave antigua y aceptando la nueva.

Para hacerlo, sigue estos pasos en tu terminal de Mac:

1. **Abrir el Terminal**.
2. Ejecuta el siguiente comando para eliminar la clave antigua asociada con la dirección IP de tu Raspberry Pi (en este caso, `192.168.1.134`) de tu archivo `known_hosts`:

   ```sh
   ssh-keygen -R 192.168.1.134
   ```

   Este comando eliminará la entrada para `192.168.1.134` del archivo `known_hosts`, que es donde se almacenan las claves de los hosts conocidos. Al hacer esto, eliminarás la advertencia de que la clave del host ha cambiado, pero también eliminarás una capa de verificación para la conexión.

3. Intenta volver a conectarte o transferir el archivo con `scp`. Esta vez, recibirás un mensaje pidiéndote que verifiques la huella digital de la clave del host y que aceptes la conexión. Si la dirección IP y la huella digital de la clave que ves son esperadas para tu Raspberry Pi, confirma que deseas continuar. Esto agregará la nueva clave del host a tu archivo `known_hosts`, permitiéndote establecer la conexión.

   Asegúrate de que realmente confías en este host antes de aceptar la nueva clave. Si tienes alguna duda sobre por qué la clave del host ha cambiado, es buena idea verificarlo antes de proceder, posiblemente revisando la configuración del servidor o contactando al administrador del sistema de la Raspberry Pi para confirmar que los cambios son legítimos.