function showDay(day) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const content = document.getElementById("content");

  if (day === 1) {
    content.innerHTML = `
      <div class="card-content">
        <h2>Day 1 시부야 🌸</h2>
        <p class="meta">📅 2025.07 · 📍 Tokyo</p>
        <p>
          도쿄 도착! ✈️  
          시부야에서 하루를 시작했다.
        </p>

        <div class="photo-wrap">
          <img src="day1.jpg" class="photo" alt="Day 1 시부야 사진 1">
          <img src="day1-2.jpg" class="photo" alt="Day 1 시부야 사진 2">
        </div>

        <div class="divider"></div>
        <ul>
          <li>시부야</li>
          <li>라멘</li>
          <li>첫날</li>
        </ul>
      </div>
    `;
  } else if (day === 2) {
    content.innerHTML = `
      <div class="card-content">
        <h2>Day 2 디즈니씨 🎠</h2>
        <p class="meta">📅 2025.07 · 📍 Tokyo</p>
        <p>
          하루 종일 디즈니씨 💫  
          진짜 꿈나라 같았다.
        </p>

        <div class="photo-wrap">
          <img src="day2.jpg" class="photo" alt="Day 2 디즈니씨 사진">
        </div>

        <div class="divider"></div>
        <ul>
          <li>디즈니씨</li>
          <li>놀이기구</li>
          <li>야경최고</li>
        </ul>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="card-content">
        <h2>Day 3 귀국 🧸</h2>
        <p class="meta">📅 2025.07 · 📍 Tokyo</p>
        <p>
          마지막 날 🥹  
          쇼핑 후 아쉬운 마음으로 귀국.
        </p>

        <div class="photo-wrap">
          <img src="day3.jpg" class="photo" alt="Day 3 사진 1">
          <img src="day3-2.jpg" class="photo" alt="Day 3 사진 2">
        </div>

        <div class="divider"></div>
        <ul>
          <li>맛집</li>
          <li>쇼핑</li>
          <li>굿바이</li>
        </ul>
      </div>
    `;
  }
}

showDay(1);







