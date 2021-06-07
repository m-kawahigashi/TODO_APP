import "./styles.css";

//追加ボタン押下時のクリックイベント
const onClickAdd = () => {
  //入力されたTODOを取得
  const inputText = document.getElementById("add-text").value;
  //入力されたTODOを削除
  document.getElementById("add-text").value = "";
  alert(inputText);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
