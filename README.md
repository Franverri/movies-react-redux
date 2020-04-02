# Redux OMDB APP

En este ejercicio vamos a crear una APP que utilice la API de [OMDB](http://www.omdbapi.com/). Vamos a crear nuestra app utilizando __REACT__ y __REDUX__.

> Vamos a necesitar una APIKEY ya que la API de OMDB es paga. Usen `apikey=20dac387`

Con tu App podremos:

* Buscar películas y listarlas.
* Poder ver todos los detalles de una película en particular.
* Poder agregar las películas a tu lista de favoritos.
* Poder sacar películas de tu lista de favoritos.

## Estructura

Podemos observar que la estructura de carpetas es la siguiente:

```bash.
├── public
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

* __dist__: Carpeta destino del output de webpack.
* __src__: Carpeta donde estará el código fuente del front-end de nuestra app.
    * __assets__: Imágenes y otros archivos estáticos.
    * __components__: Todos nuestros componentes de REACT junto con su CSS.
    * __containers__: Nuestros containers de REACT.
    * __redux__:  Todo lo relacionado con redux.
    * __utils__: Funciones comunes a todos, si es que hay.

Antes de empezar a codear, vamos a pensar un diseño para nuestra página y hacer una lista con los __componentes__ y __containers__ que vamos a tener.
Empezaremos por los más pequeños y simples (los puramente presentacionales sobre todo).
Cuando nos toque crear un __container__ de _Redux_ pensaremos las props del _Estado_ que vamos a mapear al container y las acciones que van a disparar. Luego codearemos primero las acciones, luego los reducers y por último el Container.

### Rutas

Nuestra aplicación tiene que tener un set de rutas ya definido para hacer la pagina navegable.

* `/`: la ruta de home que tiene un input para hacer la búsqueda.
* `/search`: tiene que mostrar los resultados de la búsqueda (un listado de resultados).
* `/movie/:movieId`: muestra los detalles de una película en particular.
* `/favs/`: muestra un listado de las películas favoritas, (cuando tengamos usuarios puede que esta ruta cambie).

> Para poder emular lo de guardar a favoritos, vamos a guardar las películas favoritas en el __Estado__ de nuestra aplicación.

### Instrucciones

#### Store

### Extras

Si terminaste rápido intentá implementar animaciones con estos [addOns](https://facebook.github.io/react/docs/animation.html) de React.

También pueden diferenciar la búsqueda entre series y películas, ¿esto implicaría crear otra ruta?
