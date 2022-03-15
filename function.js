let script_data = "";
async function setup1() {
    try {
        var jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-3.5.0.js';
        document.head.appendChild(jquery);
        alert('JQUERY SETUP : SUCCESS!');
    } catch (e) {
        console.log(e);
        alert('JQUERY SETUP : FAILED!');
    };
};

function show_overlay(text = null) {
    var textarea_awikwok = document.getElementById('area_jawaban');
    textarea_awikwok.innerHTML = text;
    document.getElementById("awikwok").style.display = "block";
};

function close_overlay() {
    document.getElementById("awikwok").style.display = "none";
};

async function setup2() {
    console.log(2);
    try {
        await $.get('https://raw.githubusercontent.com/jsmnkk/xxx/main/kisi%20kisi.js', function (data, textStatus, jqXHR) {
            script_data += data;
        });
        var kisi_kisi = document.createElement('script');
        kisi_kisi.innerHTML = script_data;
        document.body.appendChild(kisi_kisi);
        alert('SUBJECT MATTER SETUP : SUCCESS!');
    } catch (e) {
        console.log(e);
        alert('SUBJECT MATTER SETUP : FAILED!');
    };
};

function setup3() {
    globalThis.rows = 30;
    globalThis.cols = 50;
    console.log(3);
    try {
        var style = document.createElement("style");
        style.innerHTML = `#awikwok {\n position: fixed;\n display: none;\n width: 100%;\n height: 100%;\n top: 0;\n left: 0;\n right: 0;\n bottom: 0;\n background-color: rgba(0,0,0,0.5);\n z-index: 2;\n cursor: pointer;\n }\n \n #text_awikwok{\n position: absolute;\n top: 50%;\n left: 50%;\n font-size: 50px;\ncolor: white;\n transform: translate(-50%,-50%);\n -ms-transform: translate(-50%,-50%);\n}\n\ntextarea {\nfont-size:15px;\n}`;
        if (document.body.appendChild(style)) {
            var awikwok = document.createElement('div');
            awikwok.id = 'awikwok';
            awikwok.addEventListener("click", close_overlay);
            document.body.appendChild(awikwok);
            var awikwok_element = document.getElementById('awikwok');
            var text_awikwok = document.createElement('div');
            text_awikwok.id = 'text_awikwok';
            awikwok_element.appendChild(text_awikwok);
            var text_awikwok_element = document.getElementById('text_awikwok');
            var textarea = document.createElement("textarea");
            textarea.id = 'area_jawaban';
            textarea.rows = globalThis.rows;
            textarea.cols = globalThis.cols;
            text_awikwok_element.appendChild(textarea);
            alert('OVERLAY SETUP : SUCCESS!');
        }
    } catch (e) {
        console.log(e);
        alert('OVERLAY SETUP : FAILED!');
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function build1() {
    setup1();
};

function build2() {
    longfunctionfirst(shortfunctionsecond);
};

function longfunctionfirst(callback) {
    setTimeout(function () {
        setup2();
        if (typeof callback == 'function')
            callback();
    }, 3000);
};

function shortfunctionsecond() {
    setTimeout(setup3, 200);
};

function setSize(width, height){
    globalThis.cols = width;
    globalThis.rows = height;
};
