function generateQuiz() {
  const grade = document.getElementById("grade").value;
  const topic = document.getElementById("topic").value || "Chủ đề bất kỳ";

  document.getElementById("result").innerHTML = `
    <h3>Đề Toán lớp ${grade}</h3>
    <p><b>Chủ đề:</b> ${topic}</p>
    <ol>
      <li>Giải phương trình: x² - 5x + 6 = 0</li>
      <li>Tính diện tích hình tròn bán kính 7cm</li>
      <li>Tìm GTLN của hàm số y = -x² + 4x + 1</li>
    </ol>
  `;
}
