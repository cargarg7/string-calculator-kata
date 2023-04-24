String Calculator

* Reglas
- Para un null o una cadena vacía devolverá cero.
- Para un número en formato string lo convierte a un tipo numérico.
- Para varios números separados por comas debe sumarlos.
- Los elementos no numéricos no afectan al valor total.
- La función debe admitir separadores personalizados. Configuración //{separator}/{valor}{separator}{valor}...

* Ejemplos
- En el caso de recibir una expresión nula o vacía no se incrementa el total: null -> 0, "" -> 0.
- Convierte un número en formatro string a un tipo numérico: "1" -> 1.
- Suma todos los números separados por comas: "1,2" -> 3, "1,2,3" -> 6.
- No incrementa el total para valores no numéricos: "a" -> 0, "1,a" -> 1, "1,a,2" -> 3, "1a,2" -> 2.
- Suma todos los números separados por un separador personalizado: "//#/3#2" -> 5, "//#/3,2" -> 0, "//%/1%2%3" -> 6.
