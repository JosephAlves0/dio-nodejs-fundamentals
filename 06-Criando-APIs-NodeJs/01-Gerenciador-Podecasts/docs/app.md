# Nome do Aplicativo: Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
 - [saúde, bodybuilder, mentalidade, humor]
- Filtrar eposódios por nome de podcast

## Como
### Feature:
 Listar os episódios podcasts em sessões de categorias

 ### Como vou implementar:
  Vou retornar em uma api rest (json) o
  nome do podcast, nome do episódio, imagem da capa, link, categoria

  ```js
  [
    {
     podcastName: "flow",
     episode: "CBUM - Flow #319",
     videoId: "5DaLlqP-8uI",
     cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
     link: "https://www.youtube.com/watch?v=5DaLlqP-8uI",
     categories: ["saúde", "esporte", "bodybuilder"]
    },
    {
     podcastName: "flow",
     episode: "RUBENS BARRICHELLO - Flow #339",
     videoId: "4KDGTdiOV4I",
     cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
     link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
     categories: ["esporte", "corrida"]
    },
  ]
  ```