

window.onload = function() {
    alert(" الان الصفحه جاهزه الاستعمال علي اي جهاز 😊");
    main(); 
};



function dark() {
    let img = document.getElementById('img');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    
    if (img.src.includes('photos/moon.png')) {
        img.src = 'photos/light mode.png';
        document.documentElement.style.setProperty('--background-color', '#111111');
        document.documentElement.style.setProperty('--font-color', '#FFFFFF');
        document.documentElement.style.setProperty('--btn-color', 'white');
        document.documentElement.style.setProperty('--bbtn-color', '#6E1AD7');
        document.documentElement.style.setProperty('--primary-color', '#272727');
        phone.src = 'photos/light phone.png';
        email.src = 'photos/light email.png';
    } else {
        img.src = 'photos/moon.png';
        email.src = 'photos/dark email.png';
        phone.src = 'photos/dark phone.png';
        document.documentElement.style.setProperty('--background-color', '#FFFFFF');
        document.documentElement.style.setProperty('--font-color', 'black');  
        document.documentElement.style.setProperty('--btn-color', 'black');  
        document.documentElement.style.setProperty('--bbtn-color', '#28A4C2');
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
function youtube1() {
    window.open('https://www.youtube.com/');
}
function youtube2() {
    window.open('https://www.youtube.com/');
}