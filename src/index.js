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
  //削除ボタン押下後、押下されたTODOを削除する
  deleteButtonTag.addEventListener("click", () => {
    //ボタン押下されたTODO(divタグ)を取得
    const deleteTarget = deleteButtonTag.parentNode;
    //TODO(親要素)を削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //入力されたTODO・ボタンタグを追加する
  divTag.appendChild(liTag);
  divTag.appendChild(completeButtonTag);
  divTag.appendChild(deleteButtonTag);

  //ulタグの子要素としてdivタグを設定
  document.getElementById("incomplete-list").appendChild(divTag);
};

//追加ボタン押下後イベント発火
document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
