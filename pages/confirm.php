<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    // 他のフォームデータも同様に取得

    // ファイルにデータを保存
    $data = "お名前: $name\n"; // 他のデータも同様に追加
    file_put_contents('お問い合わせ結果.txt', $data, FILE_APPEND | LOCK_EX);

    // 結果を表示
    echo "<p>お問い合わせ内容が保存されました。</p>";
} else {
    // フォームからのリクエストが正しくない場合のエラーメッセージ
    echo "<p>正しい方法でアクセスしてください。</p>";
}
?>
