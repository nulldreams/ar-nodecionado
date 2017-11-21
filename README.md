# ar-nodecionado ❄
Aplicativo em NodeJS que consome um painel de gerenciamento de aparelhos de ar condicionado e gera uma API. 

API desenvolvida para consumir o [Painel Hitachi cs-net web](http://www.jci-hitachi.com.br/produto/cs-net-web)

- List (GET)
```json
{
    "gadgets": [
        {
            "name": "gadget-1",
            "ui": "0",
            "temperature": "22 ºC",
            "on": true,
            "ue": "1"
        },
        {
            "nome": "gadget-2",
            "ui": "1",
            "temperature": "22 ºC",
            "on": false,
            "ue": "1"
        },
        ...
    ]
}
```

- Turn on (POST)
```json
{
    "name": "gadget-1",
    "ui": "9",
    "ue": "1"
}
```


- Turn off (POST)
```json
{
    "name": "gadget-1",
    "ui": "9",
    "ue": "1"
}
```

### Em desenvolvimento...
