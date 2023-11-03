//---------------------------------------------------------
//                      設定・宣言
//---------------------------------------------------------
//キャッシュの名前
const CACHE_NAME = 'koureisya_hacker_pwa';
//キャッシュ対象のファイルを選択（スコープからの相対パス）
const CACHE_FILES = [
    './',
    './index.html'
    //ファイルを追加したらここにパスを追加
].map(path => new URL(path,registration.scope).pathname);



//---------------------------------------------------------------
//                     インストール時の処理
//---------------------------------------------------------------
self.addEventListener('install',(event) =>{
    //イベントの完了を処理が成功するまで遅延
    event.waitUntil(
        //cacheStorageの中に指定したCACHE_KEYのcacheを新しく作成して開く
        caches.open(CACHE_NAME).then((cache) => {
            //パスの一覧を渡してcacheに追加する
            return cache.addAll(CACHE_FILES);
        })
    );
});



//---------------------------------------------------------------
//                  リクエストに対する処理
//---------------------------------------------------------------

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
