# smart_phone_video

## index.html
使用エンコーディング：utf-8

manifest.jsonの呼び出し

service workerの呼び出し

## manifest.json
| 設定名 | 設定した値 |
| --- | --- |
| name | smart_phone_video |
| short_name | e5_pwa |
| theme_color | #2196f3 |
| background_color | #2196f3 |
| display | standalone |
| start_url | ./index.html |
| icons | src:"./images/logo/logo**AA_AA**" |
|-| sizes:"**AAxAA**" |
|-| type:"image/png" |
| splash_pages | null |

## sw.js
| **変数名** |**入っている値**|
|---|---|
| CACHE_NAME | koureisya_hacker_pwa |
| CACHE_VERSION | 202x_xx_xx | 
| CACHE_KEY | CACHE_NAME + CACHE_VERSION |
| CACHE_FILES | './', './index.html' |

### installイベント（インストール時に行う処理）
Cache Storage 指定した**CACHE_KEY**名で新しく作成して開く 
パスの一覧**CACHE_FILES**を渡してCacheに追加する

### fetchイベント（リクエストに対する処理）
リクエストされたファイルがキャッシュ中にあれば該当するキャッシュを返し、なければリクエストされたファイルを**fetch**に渡してネットワークから取得した結果を返す。
