// このファイルに処理を記述する

let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
 let text=document.getElementById('input');
 // １６空の時以外以下の処理をする
 let date=['食べる','寝る','遊ぶ'];
//  console.log(date[0]);
 for (const d of date){
   console.log(d);
 }
if (text !='') {

 console.log(text.value);
 let result=text.value;
 
//  4liタグ追加子要素作った
    let newtag=document.createElement('li');
    // 5追加したliタグにクラス名追加
    newtag.classList.add('list');
    // 6入力したものをliタグへ
    newtag.textContent=text.value;
    let ul=document.getElementsByClassName('todo-list');
    // this.querySelectorだと何回も取得しなくて良い↑
    // 8作った子要素を親に合わせる
    ul[0].appendChild(newtag);
    // 9inputの中に入力された文字を消去する（値を''にする）
    // 履歴を残さない
    text.value=''; 
    // text=''でもなく
    // 10 divタグ追加
    let btn2=document.createElement("img");
    btn2.src="./delete_black_24dp.svg"
    
// 11divの中にdeleteを代入
  //  btn2.textContent="Delete";
//    12クラス名追加
// btn2.classList.add('delete');
// 13
newtag.appendChild(btn2);
// 14
btn2.addEventListener('click',function(){
    let res=confirm("Did you burn calories??")
    console.log(res);
    if (res == true) {
      newtag.remove();
    }
   
})
}
})
// // 16.配列をつくる
// 17.コンソールに配列の中身を出す
// 18.関数を作る（関数にしただけで問題なく動くか確認）←　どの番号からどの番号までが同じ処理になるの？4番から15番まで
// 18.5 引数無しの関数を一回実施、その後引数あり関数に変更
// 19.関数使ってリロード時に配列の中身を出すようにする。
// 20.その後追加されたタスクを配列にPUSHする
// 21.配列をローカルストレージに保存する
// 21.5 保存するにはJSON化で文字列に！
// 22.保存されたものをリロードじ取り出し、④を行う
// 23.配列の中身が空だった時の条件を付け加える
// 24.削除した時に配列からも削除するようにする
// 25.削除後の内容をローカルストレージに保存
