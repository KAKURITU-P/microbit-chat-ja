enum RadioMessage {
    message1 = 49434
}
// 無線帯1001
input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(1001)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// メッセージリカバリー
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    送信用文字 = 送信用文字_送信時バックアップ
    カナ文字_メモリ = カナ文字_送信時バックアップ
})
input.onGesture(Gesture.TiltRight, function () {
    if (2 <= 傾き) {
        傾き = 2
    } else {
        傾き += 1
        if (傾き == 1) {
            basic.showArrow(ArrowNames.North)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showArrow(ArrowNames.East)
            basic.pause(500)
            basic.clearScreen()
        }
    }
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 文字選択
input.onButtonPressed(Button.A, function () {
    if (傾き == 1) {
        basic.clearScreen()
        if (文字セレクター == 67) {
            文字セレクター = 0
        } else {
            文字セレクター += 1
        }
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    } else {
        if (傾き == 2) {
            basic.clearScreen()
            if (文字セレクター >= 67) {
                文字セレクター = 0
            } else {
                文字セレクター += 5
                文字セレクター += -1 * (文字セレクター % 5)
            }
            katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
        } else {
            basic.clearScreen()
            if (文字セレクター == 0) {
                文字セレクター = 67
            } else {
                文字セレクター += -1
            }
            katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (0 >= 傾き) {
        傾き = 0
    } else {
        傾き += -1
        if (傾き == 1) {
            basic.showArrow(ArrowNames.North)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showArrow(ArrowNames.West)
            basic.pause(500)
            basic.clearScreen()
        }
    }
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 無線帯1005
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(1005)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 取り消し(試験的
input.onGesture(Gesture.Shake, function () {
    if (1 == 試験的) {
        送信用文字 = 送信用文字_取り消し時バックアップ
        カナ文字 = カナ文字_取り消し時バックアップ
        送信用文字_メモリ = 送信用文字
        カナ文字_メモリ = カナ文字
        送信用文字 = 送信用文字_メモリ
        カナ文字 = カナ文字_メモリ
        basic.clearScreen()
        katakana.setScrollTime(50)
        katakana.showString("ﾄﾘｹｼ")
        katakana.setScrollTime(100)
        basic.clearScreen()
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    } else {
        if ("!?" == カナ文字_メモリ) {
            試験的 = 1
            katakana.setScrollTime(50)
            katakana.showString("ﾄﾘｹｼ ｵﾝ")
            katakana.setScrollTime(100)
        }
    }
})
// メッセージ送信
// メッセージバックアップ
input.onButtonPressed(Button.AB, function () {
    if (互換モード == 1) {
        radio.sendString(送信用文字)
    } else {
        radio.sendString("##" + 送信用文字)
    }
    カナ文字_送信時バックアップ = カナ文字_メモリ
    送信用文字_送信時バックアップ = 送信用文字
    カナ文字 = ""
    カナ文字_メモリ = ""
    送信用文字 = ""
    互換モード = 0
})
// メッセージ受信
// メッセージ複号化
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    カナ文字_受信時メモリ = ""
    カナ文字_受信時 = ""
    if (receivedString.substr(0, 2) == "##") {
        受信文字数カウンター = 1
        while (receivedString.length / 2 > 受信文字数カウンター) {
            復号化用カウンター = "a/i/u/e/o/kakikukekosasisusesotatitutetonaninunenohahihuhehomamimumemoya//yu//yorarirurerowa////wonnttlsld//lflalilulelo!/?/A/B/C/D/E/F/".indexOf(receivedString.substr(受信文字数カウンター * 2, 2))
            カナ文字_受信時 = "" + カナ文字_受信時メモリ + "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".charAt(復号化用カウンター / 2)
            カナ文字_受信時メモリ = カナ文字_受信時
            受信文字数カウンター += 1
        }
    } else {
        受信文字数カウンター = 0
        while (receivedString.length > 受信文字数カウンター) {
            復号化用カウンター = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij\\k\\lmnopqr\\\\stuvw\\xyz1234567890!".indexOf(receivedString.substr(受信文字数カウンター, 1))
            カナ文字_受信時 = "" + カナ文字_受信時メモリ + "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".charAt(復号化用カウンター)
            カナ文字_受信時メモリ = カナ文字_受信時
            受信文字数カウンター += 1
        }
    }
    basic.pause(200)
    basic.clearScreen()
    katakana.showString(カナ文字_受信時)
    basic.pause(1000)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// メッセージ保存
// メッセージ暗号化
input.onButtonPressed(Button.B, function () {
    if (互換モード == 1) {
        送信用文字_メモリ = "" + 送信用文字 + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij\\k\\lmnopqr\\\\stuvw\\xyz1234567890!".substr(文字セレクター, 1)
        カナ文字_メモリ = "" + カナ文字 + "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1)
        送信用文字_取り消し時バックアップ = 送信用文字
        カナ文字_取り消し時バックアップ = カナ文字
        送信用文字 = 送信用文字_メモリ
        カナ文字 = カナ文字_メモリ
    } else {
        if (文字セレクター == 66 && カナ文字.length == 0) {
            basic.clearScreen()
            katakana.setScrollTime(50)
            katakana.showString("ｺﾞｶﾝ")
            katakana.setScrollTime(100)
            basic.clearScreen()
            互換モード = 1
        } else {
            送信用文字_メモリ = "" + 送信用文字 + "a/i/u/e/o/kakikukekosasisusesotatitutetonaninunenohahihuhehomamimumemoya//yu//yorarirurerowa////wonnttlsld//lflalilulelo!/?/A/B/C/D/E/F/".substr(文字セレクター * 2, 2)
            カナ文字_メモリ = "" + カナ文字 + "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1)
            送信用文字_取り消し時バックアップ = 送信用文字
            カナ文字_取り消し時バックアップ = カナ文字
            送信用文字 = 送信用文字_メモリ
            カナ文字 = カナ文字_メモリ
        }
    }
})
// 無線帯1003
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(1003)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
})
// 入力文字確認
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (傾き == 0) {
        basic.clearScreen()
        katakana.showString(カナ文字_受信時)
        basic.clearScreen()
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    } else {
        basic.clearScreen()
        katakana.showString(カナ文字_メモリ)
        basic.clearScreen()
        katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔ/ﾕ/ﾖﾗﾘﾙﾚﾛﾜ//ｦﾝｯｬｭ/ｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
    }
})
// 初期設定(リセット)
let 復号化用カウンター = 0
let 受信文字数カウンター = 0
let カナ文字_受信時 = ""
let カナ文字_受信時メモリ = ""
let 送信用文字_メモリ = ""
let カナ文字_取り消し時バックアップ = ""
let カナ文字 = ""
let 送信用文字_取り消し時バックアップ = ""
let カナ文字_送信時バックアップ = ""
let カナ文字_メモリ = ""
let 送信用文字_送信時バックアップ = ""
let 送信用文字 = ""
let 互換モード = 0
let 文字セレクター = 0
let 傾き = 0
let 試験的 = 0
katakana.setScrollTime(100)
試験的 = 0
傾き = 1
radio.setGroup(1001)
文字セレクター = 0
katakana.showString("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｯｬｭｮｧｨｩｪｫ!?_-｡､ﾞﾟ".substr(文字セレクター, 1))
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
互換モード = 0
