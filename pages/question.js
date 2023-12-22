window.addEventListener('load', function () {
    document.getElementById('confirmation_button').addEventListener('click', function () {
        let str = ''
        str = `名前：${document.getElementById('nameInput').value}`
        str = `${str}　_　ふりがな：${document.getElementById('furiganaInput').value}`
        str = `${str}　_　メールアドレス：${document.getElementById('emailInput').value}`
        str = `${str}　_　機種：${document.getElementById('checkIos').checked ? 'ios' : 'Android'}`
        str = `${str}　_　問合せ項目：${document.getElementById('selectInquiry').value}`
        str = `${str}　_　問合せ内容：${document.getElementById('textInquiry').value}`

        document.getElementById('outputname').innerHTML = `名前：${document.getElementById('nameInput').value}`
        document.getElementById('outputfurigana').innerHTML = `ふりがな：${document.getElementById('furiganaInput').value}`
        document.getElementById('outputemail').innerHTML = `メールアドレス：${document.getElementById('emailInput').value}`
        document.getElementById('outputkind').innerHTML = `機種：${document.getElementById('checkIos').checked ? 'ios' : 'Android'}`
        document.getElementById('outputinquiry').innerHTML = `問合せ項目：${document.getElementById('selectInquiry').value}`
        document.getElementById('outputtextinquiry').innerHTML = `問合せ内容：${document.getElementById('textInquiry').value}`

        // const fs = require('fs');
        // console.log(1)
        
    })

    //要素を取得
    const modal = document.querySelector('.js-modal'),
        open = document.querySelector('.js-modal-open'),
        close = document.querySelector('.js-modal-close');

    //「開くボタン」をクリックしてモーダルを開く
    function modalOpen() {
        modal.classList.add('is-active');
    }
    open.addEventListener('click', modalOpen);

    //「閉じるボタン」をクリックしてモーダルを閉じる
    function modalClose() {
        modal.classList.remove('is-active');
    }
    close.addEventListener('click', modalClose);

    //「モーダルの外側」をクリックしてモーダルを閉じる
    function modalOut(e) {
        if (e.target == modal) {
            modal.classList.remove('is-active');
        }
    }
    addEventListener('click', modalOut);
})
