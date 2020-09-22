console.log ('soy una mimosa')
console.log ('alo alo')
console.log ('soy una burra, gracias Mati')
/* 

1. Nos posicionamos en la carpeta correcta para comenzar:

cd Guchito 

2. Inicializamos Git

git init 

(esto nos va a arrojar: Initialized empty Git repository in /Users/violetaaguirregonzalez/Desktop/Guchito/.git/)

3. Chequeamos status 

git status 

(esto nos va a arrojar que todavía no tenemos nada dentro del repositorio)

(tenemos que colocar algún archivo dentro de la carpeta y lo hacemos creando uno desde VSC en esta misma carpeta que creamos)

Por lo tanto, esto nos va a arrojar, que SI tenemos un archivo pero que está untracked.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	app.js

nothing added to commit but untracked files present (use "git add" to track)

4. Agregamos este archivo a Git:

git add app.js 

5. Chequeamos que esté todo bien 

git status 

Esto nos va a arrojar: 

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

    new file:   app.js

6. Creamos un commit (todavía no sabemos bien para qué...)

git commit -m "para qué sirve commit nocierto?"

Esto nos arroja que hubo un archivo modificado, etc. 

7. Clonamos el repositorio 

git clone https://github.com/Guchito/Hola.git

Si todo sale bien, nos aparece el mensaje "Cloning into..." y me dice que cloné un repositorio vacío ¿?

8. Subimos un archivo al repositorio, pero previamente nos va a pedir usuario y contraseña, por lo que colocamos:

git config --global user.name vaguirre
git config --global user.token Pixeleta1

git push --set-upstream https://github.com/Guchito/Hola.git master

LA AUTENTICACION FALLO, NO SABEMOS PORQUE, ERROR FATAL. TODO MAL. 

Ahora en la computadora de Guchi: 

1. Lo primero que hicimos fue que clonar el repositorio

git clone https://github.com/Guchito/Hola.git 

2. Guchi creó una branch 

git checkout -b unaMimosa

3. Se modificó app.js y luego quisimos subirlo al repositorio

git push --set-upstream unaMimosa

ERROR FATALLLLL TODO MALLLLL 

Luego de la ayuda de Mati 

DEBEMOS ESTAR PARADOS EN LA CARPETA CORRECTA

git pull 
git checkout -b violeMimosa 
git add app.js 
git commit -m "nueva branch creada por viole"
git push --set-upstream origin violeMimosa


