function showDay(day) {
  const content = document.getElementById("content");

  if (day === 1) {
    content.innerHTML = `
      <h2>Day 1</h2>
      <ul>
        <li>시부야 스카이</li>
        <li>이치란 라멘</li>
        <li>시부야 거리 산책</li>
      </ul>
    `;
  } else if (day === 2) {
    content.innerHTML = `
      <h2>Day 2</h2>
      <ul>
        <li>디즈니씨</li>
        <li>돈카츠 마루시치</li>
        <li>기념품 쇼핑</li>
      </ul>
    `;
  } else {
    content.innerHTML = `
      <h2>Day 3</h2>
      <ul>
        <li>츠지한</li>
        <li>백화점 방문</li>
        <li>공항 이동</li>
      </ul>
    `;
  }
}
