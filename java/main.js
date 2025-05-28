var loadingScreen = document.querySelector(".loadingScreen");

window.addEventListener('load', function() {
  loadingScreen.style.display = 'none';
})

const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
  
const slider = document.getElementById("slider");
  const slide_1 = document.getElementById("slide_1");
  const slide_2 = document.getElementById("slide_2");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  
  
nextBtn.onclick = function () {
      slide_1.style.display = 'none';
      slide_2.style.display = 'block';
      
};
prevBtn.onclick = function () {
       slide_2.style.display = 'none';
      slide_1.style.display = 'block';
      
};

document.addEventListener('DOMContentLoaded', () => {
    // كل كود الجافاسكريبت يجب أن يكون هنا
    const cardsContainer = document.querySelector('.cards-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (cardsContainer && leftArrow && rightArrow) { // تأكد أن العناصر موجودة
        leftArrow.addEventListener('click', () => {
            const cardWidth = document.querySelector('.card').offsetWidth;
            const gap = 40;
            cardsContainer.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            const cardWidth = document.querySelector('.card').offsetWidth;
            const gap = 40;
            cardsContainer.scrollBy({
                left: (cardWidth + gap),
                behavior: 'smooth'
            });
        });
    } else {
        console.error("One or more required elements were not found. Check your HTML classes.");
    }
});



