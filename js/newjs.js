/*************************分类页面美化*************************/
// 获取所有类别列表项
const categoryItems = document.querySelectorAll('.category-list-item');

// 为每个类别列表项生成随机颜色渐变背景和图标
categoryItems.forEach((item, index) => {
    // 为每个类别列表项创建随机颜色渐变背景
    function randomBgImg() {
        const deg = Math.floor(Math.random() * 360);
        // const randomBg = `linear-gradient(${deg}deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%)`;
        const randomBg = `linear-gradient(${deg}deg, #${Math.floor(0).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%)`;
        item.style.backgroundImage = randomBg;
    }

    // 生成随机图标（这里使用了 Font Awesome 图标库）
    const icons = ['📑', '📚', '🦋', '💻', '💬', '✨', '🎢', '🎪', '🎭', '👠', '⚾', '⚽', '🎰', '🎶', '⌨', '🖨', '📸']; // 可以根据需要添加更多图标
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    // 更新类别列表项的 HTML 内容，设置背景和图标
    item.innerHTML = `
    <div>${item.innerHTML}</div>
    <div class="category-list-icon">${randomIcon}</div>`;

    // 调用随机颜色渐变背景函数
    randomBgImg();
});

function postAddToc() {
  const postContent = document.querySelector('#post > #article-container.post-content');
  const cardToc = document.getElementById('card-toc');

  if (postContent && cardToc) {
    const tocItems = cardToc.querySelectorAll('.toc-link');
    const targetElements = {};

    tocItems.forEach(tocLink => {
      const href = decodeURIComponent(tocLink.getAttribute('href').slice(1));
      const targetElement = document.getElementById(href);
      const tocNumber = tocLink.querySelector('.toc-number').textContent;

      if (targetElement) {
        targetElements[href] = { element: targetElement, tocNumber };
      }
    });

    // 设置 dataset.toc 属性
    Object.entries(targetElements).forEach(([href, { element, tocNumber }]) => {
      element.dataset.toc = tocNumber;
    });
  }
}

postAddToc();
