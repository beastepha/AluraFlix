let listaFilme = ["https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Shrek_Poster.jpg/230px-Shrek_Poster.jpg", "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg", "https://br.web.img3.acsta.net/pictures/15/05/06/16/13/020977.jpg", "https://cdn.kobo.com/book-images/7b0e1631-9550-459a-9914-ab53b5fdb82e/1200/1200/False/orgulho-e-preconceito-19.jpg", "https://upload.wikimedia.org/wikipedia/pt/e/ec/Troia_poster.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/87/35/87/20039778.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/210/473/21047331_201310071632457.jpg", "https://images.justwatch.com/poster/175329420/s718/jogos-vorazes-a-esperanca-parte-1.jpg", "https://br.web.img2.acsta.net/pictures/15/12/07/20/58/133341.jpg", "https://i.pinimg.com/236x/c9/87/a2/c987a28ac0b72afc74b1984dd7717c2a.jpg", "https://animetvonline.cx/wp-content/uploads/2023/05/youjo.jpg"]

let listaLink = ["https://www.netflix.com/br/title/60020686", "https://www.primevideo.com/-/pt/detail/Interestelar/0R7K0TE549R347J0B6BK9HIH58", "https://www.primevideo.com/detail/Mr-Robot/0ND5POOAYD6A4THTH7C1TD3TYE", "https://www.primevideo.com/-/pt/detail/Orgulho-e-Preconceito/0PHVXEDAU9BCYA83Q0R4UEOJNT", "https://www.primevideo.com/-/pt/detail/Tróia/0TZXTTF7DW9BV91V6UJ2N05V77", "https://www.netflix.com/br/title/70206672", "https://www.netflix.com/br/title/70278934", "https://www.netflix.com/br/title/70305908", "https://www.netflix.com/br/title/80057972", "https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece", "https://www.crunchyroll.com/pt-br/series/GR9P57W96/saga-of-tanya-the-evil"]

for(let i = 0; i < listaFilme.length; i++) {
  document.write('<a class = "link" target="_blank" href =' + listaLink[i] + '><img src=' + listaFilme[i] + '></a>');
 }


