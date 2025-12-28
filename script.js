function showDay(day) {
  const content = document.getElementById("content");

  if (day === 1) {
    content.innerHTML = `
      <img src="day1.jpg" class="photo">
      <div class="card-content">
        <h2>Day 1 · Shibuya</h2>
        <p>
          도쿄 첫날 ✈️  
          시부야에서 시작한 여행.
        </p>
        <ul>
          <li>#시부야</li>
          <li>#도쿄여행</li>
          <li>#tokyo</li>
        </ul>
      </div>
    `;
  } else if (day === 2) {
    content.innerHTML = `
      <img src="day2.jpg" class="photo">
      <div class="card-content">
        <h2>Day 2 · DisneySea</h2>
        <p>
          하루 종일 있어도 부족한 디즈니씨 🎢  
          분위기 최고.
        </p>
        <ul>
          <li>#디즈니씨</li>
          <li>#여행스타그램</li>
          <li>#disneysea</li>
        </ul>
      </div>
    `;
  } else {
    content.innerHTML = `
      <img src="day3.jpg" class="photo">
      <div class="card-content">
        <h2>Day 3 · Goodbye Tokyo</h2>
        <p>
          마지막 날 🥹  
          아쉬움 가득 안고 귀국.
        </p>
        <ul>
          <li>#도쿄맛집</li>
          <li>#여행끝</li>
          <li>#goodbye</li>
        </ul>
      </div>
    `;
  }
}
