document.addEventListener("DOMContentLoaded", function () {
  // Reveal animation when scrolling
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Change header background on scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-brand-red", "shadow-lg");
    } else {
      header.classList.remove("bg-brand-red", "shadow-lg");
    }
  });

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// Simple image slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("imageSlider");
  if (!slider) return; // tránh lỗi nếu phần tử chưa có trong trang

  let index = 0;
  const total = slider.children.length;

  setInterval(() => {
    index = (index + 1) % total;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); // đổi ảnh sau mỗi 3 giây
});

const stories = [
  {
    text: "💗Tôi luôn luôn biết ơn với những gì mình có. Được sống trọn vẹn ở giây phút hiện tại quả là một điều may mắn",
    img: "img/img1.jpg",
    quote: "Lòng biết ơn là bông hoa đẹp nhất nở ra từ tâm hồn.",
  },
  {
    text: "🚀Thời gian thực tập là khoảng thời gian tôi học được nhiều thứ mới ngoài đời sống",
    img: "img/img2.jpg",
    quote: "Khi làm toàn bộ các phần của não sẽ hoạt động",
  },
  {
    text: "🌿Gia đình chính là động lực lớn nhất của tôi",
    img: "img/img3.jpg",
    quote: "Tiến chậm vẫn là tiến — miễn là đừng dừng lại.",
  },
  {
    text: "🌟Mỗi ngày trôi qua tôi đều cố gắng hoàn thiện bản thân hơn",
    img: "img/img4.jpg",
    quote: "Hãy trở thành phiên bản tốt nhất của chính bạn.",
  },
  {
    text: "💌Tôi yêu những điều nhỏ bé mà dễ thương",
    img: "img/img5.jpg",
    quote: "Hạnh phúc không phải là đích đến mà là hành trình.",
  },
  {
    text: "🌼Có những ngày tôi cực tệ nhưng tôi vẫn yêu nó, vì nó là một phần trong tôi",
    img: "img/img6.jpg",
    quote: "Chấp nhận bản thân là bước đầu tiên để thay đổi.",
  },
];

const storyBox = document.getElementById("story-box");
const storyContent = document.getElementById("story-content");

let index = 0;

function showStory() {
  const s = stories[index];

  // Hiệu ứng ẩn cũ
  storyContent.style.opacity = 0;
  storyContent.style.transform = "translateY(20px) scale(0.98)";

  setTimeout(() => {
    // Thay nội dung
    storyContent.innerHTML = `
        <p class="text-3xl">${s.text}</p>
        ${
          s.img
            ? `
          <div class="flex justify-center">
          <div class="flex justify-center my-4">
            <img src="${s.img}" alt="Story Image"
          class="w-[400px] h-[250px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out" />
          </div>

          </div>
        `
            : ""
        }
        <blockquote class="border-l-4 border-brand-red pl-4 italic text-gray-700 text-2xl">"${
          s.quote
        }"</blockquote>
      `;

    // Hiệu ứng hiện mượt
    storyContent.style.opacity = 1;
    storyContent.style.transform = "translateY(0) scale(1)";
    storyContent.style.transition = "all 1s cubic-bezier(0.25, 1, 0.5, 1)";

    // Hiệu ứng “nổi bọt” nhẹ của khung
    storyBox.classList.add("scale-105", "shadow-2xl");
    setTimeout(() => storyBox.classList.remove("scale-105", "shadow-2xl"), 800);

    // Chuyển sang câu kế tiếp
    index = (index + 1) % stories.length;
  }, 500); // chờ animation ẩn cũ hoàn tất
}

showStory();
setInterval(showStory, 6000); // đổi mỗi 6 giây
