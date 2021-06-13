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

  //完了ボタンを生成
  const completeButtonTag = document.createElement("button");
  completeButtonTag.innerText = "完了";
  //console.log(completeButtonTag);

  //削除ボタンを生成
  const deleteButtonTag = document.createElement("button");
  deleteButtonTag.innerText = "削除";
  //console.log(deleteButtonTag);

  //入力されたTODO・ボタンタグを追加する
  divTag.appendChild(liTag);
  divTag.appendChild(completeButtonTag);
  divTag.appendChild(deleteButtonTag);

  //ulタグの子要素としてdivタグを設定
  document.getElementById("incomplete-list").appendChild(divTag);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
