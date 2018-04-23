// ツールバーを表示するfunction
function show_toolbar() {
    // 下端にメニューを付ける
    var bottomMenu = document.createElement("div")
    bottomMenu.style.position = "sticky"
    bottomMenu.style.bottom = 0
    bottomMenu.style.display = "flex"
    bottomMenu.style.left = 0
    bottomMenu.style.right = 0
    bottomMenu.style.zIndex = 99999

    function createButton(name, callback) {
        var button = document.createElement("button")
        button.innerText = name
        button.onclick = callback
        button.type = "button"
        button.style.height = "3em"
        button.color = "#07f"
        return button
    }

    const buttons = [
        createButton("戻る", () => {
            history.back()
        }),
        createButton("進む", () => {
            history.forward()
        }),
        createButton("ｽﾀｼﾞｵ", () => {
            const rand = ("000000000" + Math.floor(Math.random() * 1000000000)).slice(-9)
            location.href = "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage%3Fl_frm%3DTop_2%26rnd%3D"+rand
        }),
        createButton("ﾘﾛｰﾄﾞ", () => {
            location.reload()
        }),
        createButton("ﾒﾆｭｰ", () => {
            document.getElementById("headerAcd").click()
        })
    ]

    buttons.forEach(button => {
        button.style.flex = "1"
        bottomMenu.appendChild(button)
    })

    document.body.appendChild(bottomMenu)
}

(function(){
    // ストレージから設定を引っ張ってくる
    chrome.storage.local.get([
        "showtoolbar"
    ], function (items) {
        var showToolbar = items.showtoolbar;
        // ツールバーの表示が有効な場合にツールバーを表示
        if (showToolbar == true){
            show_toolbar();
        }
    })
})()