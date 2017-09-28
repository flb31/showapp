angular.module('showApp')
  .constant('Config', {
    title: 'Showapp',
    limit_text: 100
  })
  .constant('Menu',[
    { name: 'Movies', url:'/movies', uri: 'search/movie', use_api: true, class: '', searchDefault: 'Pulp Fiction' },
    { name: 'Series', url:'/series', uri: 'search/tv', use_api: true, class: '', searchDefault: 'Breaking Bad' },
    { name: 'Favoritos', url:'/favorites', type: '', use_api: false, class: '', searchDefault: '' }
  ])
  .constant('Api', {
    url: 'https://api.themoviedb.org/3/',
    key: 'e6a9963c18666ffdfa26467964e0fede',
    url_image: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/',
    url_image_default: 'https://placeholdit.imgix.net/~text?txtsize=33&&w=185&h=278&bg=cccccc&txtclr=ffffff',
    title_default: 'Sin titulo'
  })
  .constant('Methods', {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE'
  });
