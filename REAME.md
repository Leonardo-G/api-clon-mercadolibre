# API Mercado Libre - clon 

Repositorio API de Mercado Libre - clon que se desarrollo para usar en el [proyecto del Front.](https://github.com/Leonardo-G/clon-mercadolibre) 


# Herramientas utilizadas para crear este proyecto

- bcryptjs: Generación de HASH en las contraseñas de los usuarios. V2.4.3.
- cors: Permitir que se puedan solicitar recursos de la API en una página web. V2.8.5.
- dotenv: Permitir las variables de entorno en el proyecto. V16.0.1.
- express: Entorno de trabajo de Node. V4.18.1.
- express-validator: Middlewares que se encargan de validar la consulta de la API. V6.14.2.
- jsonwebtoken: Crear, leer y validar tokens. V8.5.1.
- mongoose: ODM de Mongo.DB. V6.5.3.


# API

La API de la aplicación de ejemplo se describe a continuación.

## Coleccion de 	`PRODUCTOS`
### Respuesta
```
{
    _id:                    string;
    title:                  string;
    imgProduct:             string[];
    category:               string[];
    subCategory:            string[];
    characteristics:        string[];
    characteristicsDetail:  {
        code: string;
        info: {
            title:       string;
            description: string
        }[]
    }[];
    recommended:                boolean;
    visited:                     number;
    description:                 string;
    stock:                       number;
    sold:                        number;
    created:                     string;
    offer:                      boolean;
    priceDetail: {
        price:                   number;
        offerPrice:              number;
    }
    shipping: {
        code:                 0 | 1 | 2;
        detail:     "" | "Envío gratis";
    }
    interests: {
        accept:                 boolean;
        until:                   number;
    }
    condition:         "nuevo" | "usado" | "reacondicionado";
    tags:                      string[];
    idUser:                      string;
}
```

## `"/productos"`

### Obtener lista de productos. Solicitud
`GET "/"` (*)


`querys disponibles` Obtener los productos por
```
    category:               según su categoría; 
    subcategory:            según su sub-categoría; 
    offer:                  si el producto posee oferta;
    shipping:               según el tipo de envio. 0 ==> Sin envío | 1 ==> Con envío Gratis. | 2 ==> Con envio gratis FULL.
    interest:               si el producto tiene cuotas sin interés. Se espera por un "true"
    until:                  Se espera el numero de cuotas en caso de que INTEREST sea "true"
    condition:              según la condición del producto: "nuevo" | "usado" | "reacondicionado"
    price_lte:              Precio que sean menores o igual que...
    price_gte:              Precio que sean mayores o igual que...
    tags:                   según el tag del producto.
    sort=price_asc          Ordenar el precio de menor a mayor.
    sort=relevant           Ordernar por productos más relevantes.
```


### Obtener un producto según el ID. Solicitud

`GET "/:id"`  :id = ID de ún producto válido


### Obtener los productos que esten con ofertas. Solicitud

`GET "/short/by-offer"`  (*)

### Respuesta
```
{
    _id:                    string;
    title:                  string;
    imgProduct:             string[];
    recommended:                boolean;
    created:                     string;
    offer:                      boolean;
    priceDetail: {
        price:                   number;
        offerPrice:              number;
    }
    shipping: {
        code:                 0 | 1 | 2;
        detail:     "" | "Envío gratis";
    }
    interests: {
        accept:                 boolean;
        until:                   number;
    }
    condition:         "nuevo" | "usado" | "reacondicionado";
    tags:                      string[];
    idUser:                      string;
}
```


### Obtener los productos según la categoría. Solicitud

`GET "/short/by-of-:subcategory"` (*)  :subcategory = subcategoría que están disponibles según el producto




## Coleccion de 	`OPINIONES`
### Respuesta

```
{
    _id:                    string;
    idProduct:              string;
    title:                  string;
    comment:                string;
    like:                   number;
    down:                   number;
    rate:                   number;
    created:                number;
}

```

## `"/opinions"`

### Crear una nueva opinión del producto. Solicitud

`POST "/new-comment/:idproduct"`   Siendo ":idproduct", como el ID válido del producto.


### Obtener todos las opiniones del producto. Solicitud

`POST "/:idproduct"` (*)  Siendo ":idproduct", como el ID válido del producto.



## Coleccion de 	`PREGUNTAS`
### Respuesta

```
{
    _id:                    string;
    created:                number;
    question:               string;
    response:               string;
    answered:              boolean;
    idProduct:              string;
}

```


## `"/questions"`

### Crear una nueva pregunta. Solicitud

`POST "/:idproduct/new-question"`   Siendo ":idproduct", como el ID válido del producto.


### Actualizar la pregunta del producto . Solicitud

`POST "/:idquestion/response"`   Siendo ":idproduct", como el ID válido de la pregunta.


### Obtener las preguntas del producto. Solicitud

`POST "/:idquestion/get"` (*)   Siendo ":idproduct", como el ID válido de la pregunta.


 (*) querys disponbiles
 ```
 - limit:   números de documentos a traer en la solicitud.
 - skip:    traer documentos a partir del número de índice del documento       
 ```