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

  //更新ボタン押下後、押下されたTODOを完了したTODOに移動する
  completeButtonTag.addEventListener("click", () => {
    //ボタン押下されたTODO(divタグ)を取得
    const completeTarget = completeButtonTag.parentNode;
    //TODO(divタグ)を削除
    deleteTodo(completeTarget);

    //TODO内容を取得
    const completeTodo = completeTarget.firstElementChild.innerText;
    //divタグを初期化
    completeTarget.textContent = null;
    //liタグを生成
    const comLiTag = document.createElement("li");
    comLiTag.innerText = completeTodo;
    //戻すボタン生成
    const returnButtonTag = document.createElement("button");
    returnButtonTag.innerText = "戻す";
    returnButtonTag.addEventListener("click", () => {
      ///ボタン押下されたTODO(divタグ)を取得
      const returnTarget = returnButtonTag.parentNode;

      //TODOを削除
      document.getElementById("complete-list").removeChild(returnTarget);

      //戻すTODOを取得し、作成したliタグに追加する
      const returnTodo = returnTarget.firstElementChild.innerText;
      returnTarget.textContent = null;
      const returnLiTag = document.createElement("li");
      returnLiTag.innerText = returnTodo;

      ////divタグに各子要素を追加
      returnTarget.appendChild(returnLiTag);
      returnTarget.appendChild(completeButtonTag);
      returnTarget.appendChild(deleteButtonTag);

      //TODOを戻す
      document.getElementById("incomplete-list").appendChild(returnTarget);
    });

    //divタグに各子要素を追加
    completeTarget.appendChild(comLiTag);
    completeTarget.appendChild(returnButtonTag);

    //完了したTODOにTODOを追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  //削除ボタンを生成
  const deleteButtonTag = document.createElement("button");
  deleteButtonTag.innerText = "削除";
  //console.log(deleteButtonTag);
  //削除ボタン押下後、押下されたTODOを削除する
  deleteButtonTag.addEventListener("click", () => {
    //TODO(divタグ)を削除
    deleteTodo(deleteButtonTag.parentNode);
  });

  //入力されたTODO・ボタンタグを追加する
  divTag.appendChild(liTag);
  divTag.appendChild(completeButtonTag);
  divTag.appendChild(deleteButtonTag);

  //ulタグの子要素としてdivタグを設定
  document.getElementById("incomplete-list").appendChild(divTag);
};

//TODO削除処理
const deleteTodo = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//追加ボタン押下後イベント発火
document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
