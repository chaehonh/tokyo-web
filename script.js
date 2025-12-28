function showDay(day) {
  const content = document.getElementById("content");

  if (day === 1) {
    content.innerHTML = `
      <div class="card-content">
        <h2>Day 1 🌸</h2>
        <p>
          도쿄 도착! ✈️  
          시부야에서 하루를 시작했다.
        </p>
        <img src="day1.jpg" class="photo">
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
        <h2>Day 2 🎠</h2>
        <p>
          하루 종일 디즈니씨 💫  
          진짜 꿈나라 같았다.
        </p>
           <img src="day2.jpg" class="photo">
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
        <h2>Day 3 🧸</h2>
        <p>
          마지막 날 🥹  
          아쉬운 마음으로 귀국.
        </p>
         <img src="day3.jpg" class="photo">
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



