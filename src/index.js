import "./styles.css";

//追加ボタン押下時のクリックイベント
const onClickAdd = () => {
  //入力されたTODOを取得
  const inputText = document.getElementById("add-text").value;
  //入力されたTODOを削除
  document.getElementById("add-text").value = "";

  //divタグを生成
  const divTag = document.createElement("div");
  divTag.className = "list-row";

  //liタグを生成
  const liTag = document.createElement("li");
  liTag.innerText = inputText;

  //divタグの子要素としてliタグを設定
  divTag.appendChild(liTag);

  //ulタグの子要素としてdivタグを設定
  document.getElementById("incomplete-list").appendChild(divTag);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
