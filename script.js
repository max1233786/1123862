// 假資料：可以替換為你自己的作品
const works = [
  {
    title: "作品一",
    description: "這是我利用asp.net mvc架構設計的網站之一，專案主題為音樂歌單編輯器",
    image: "https://i.ibb.co/ycN7QhCv/image.png",
    
  },
  {
    title: "作品二",
    description: "使用3dmax製作的屋子",
    image: "https://i.ibb.co/wNCf7Tph/1123862-4.jpg",
    
  },
  {
    title: "作品三",
    description: "這是我使用vsc完成的一個音樂撥放器",
    image: "https://i.ibb.co/wZh8Jmp3/image.png"
  }
];
  

const portfolioContainer = document.getElementById('portfolio-content');

works.forEach(work => {
  const col = document.createElement('div');
  col.className = 'col-md-6 mb-4';

  col.innerHTML = `
    <div class="card h-100">
      <img src="${work.image}" class="card-img-top" alt="${work.title}">
      <div class="card-body">
        <h5 class="card-title">${work.title}</h5>
        <p class="card-text">${work.description}</p>
        
      </div>
    </div>
  `;

  portfolioContainer.appendChild(col);
});

// 分頁切換功能：依據網址 hash (#about 或 #portfolio)
function showTabFromHash() {
  const hash = window.location.hash.replace('#', '') || 'about';
  document.getElementById('about').style.display = (hash === 'about') ? 'block' : 'none';
  document.getElementById('portfolio').style.display = (hash === 'portfolio') ? 'block' : 'none';
}

showTabFromHash();
window.addEventListener('hashchange', showTabFromHash);