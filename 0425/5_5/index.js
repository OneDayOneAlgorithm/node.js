/* 
  아래에 코드를 작성해주세요.
*/
let keyword = ''
let cnt = 1
// 목록 나타나게 하는 함수
function fetchAlbums(keyword, page, limit) {
  const API_URI = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=0da6c9395f9fcf60fd99ec7035e22e67&format=json&page=${page}&limit=${limit}`
  axios.get(API_URI)
    .then((response)=>{
      const albums = response.data.results.albummatches.album
      console.log(albums)
      for (let i = 0; i < albums.length; i++) {
        const card = document.createElement('div')
        card.classList.add('search-result__card')

        const cardimg = document.createElement('img')
        cardimg.src = albums[i].image[1]['#text']
  
        const names = document.createElement('div')
        names.classList.add('search-result__text')
  
        const h2 = document.createElement('h2')
        h2.innerText = albums[i]['artist']
  
        const p = document.createElement('p')
        p.innerText = albums[i]['name']
        
        names.appendChild(h2)
        names.appendChild(p)
        card.append(cardimg)
        card.append(names)
        card.addEventListener('click',function(){
          window.open(albums[i]['url'])
        })
        document.body.appendChild(card)
      }
      console.log(cnt)
      cnt += 1
    })
    .catch((error)=>{
      alert('잠시 후 다시 시도해주세요')
    })
}

// 검색어를 keyword에 저장
const input = document.querySelector('.search-box__input')
input.addEventListener('input',function(event){
  keyword = event.target.value
})

// 검색 버튼 누르면 함수 실행
const searchBtn = document.querySelector('.search-box__button')
searchBtn.addEventListener('click',function(){
  fetchAlbums(keyword,cnt,10)
})

// 엔터 누르면 함수 실행
input.addEventListener('keydown',function(event){
  if (event.key === 'Enter'){
    fetchAlbums(keyword,cnt,10)
  }
})





function handleScroll() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  console.log(scrollHeight)
  console.log(scrollTop)
  console.log(clientHeight)
  if (scrollTop + clientHeight >= scrollHeight) {
    fetchAlbums(keyword,cnt,10)}}
    window.addEventListener('scroll', handleScroll);
