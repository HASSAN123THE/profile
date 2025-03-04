

window.onload = function() {
    alert("الصفحه غير جاهزه للاستعمال علي الهواتف فقط علي الكومبيوتر او الابتب 😊");
    main(); 
};



function dark() {
    let img = document.getElementById('img');
    
    if (img.src.includes('photos/moon.png')) {
        img.src = 'photos/light.png';
        document.documentElement.style.setProperty('--background-color', '#111111');
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--btn-color', 'white');
        document.documentElement.style.setProperty('--primary-color', '#333333');
    } else {
        img.src = 'photos/moon.png';
        document.documentElement.style.setProperty('--background-color', '#eaeaea');
        document.documentElement.style.setProperty('--font-color', 'black');  
        document.documentElement.style.setProperty('--btn-color', 'black');  
        document.documentElement.style.setProperty('--primary-color', '#fafafa');
    }
}



function tik_tok() {
    window.open('https://www.tiktok.com/');
}
function instegram() {
    window.open('https://www.instagram.com/');
}

function face_book() {
    window.open('https://www.facebook.com/');
}
function x() {
    window.open('https://www.x.com/');
}

window.onload = function() {
    alert("الصفحه غير جاهزه للاستعمال علي الهواتف فقط علي الكومبيوتر او الابتب 😊");
    main(); 
};

