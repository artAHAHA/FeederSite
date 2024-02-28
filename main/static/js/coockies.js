function saveState() {
    var currentTime = new Date().toString();

    document.cookie = "lastVisitedTime=" + currentTime + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    alert("Состояние успешно сохранено!");
}

function clearState() {

    document.cookie = "lastVisitedTime=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    alert("Состояние успешно очищено!");
}


// Функция для получения значения cookies по имени
function getCookie(name) {
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// При загрузке страницы восстанавливаем состояние, если оно было сохранено
window.onload = function () {
    var lastVisitedTime = getCookie("lastVisitedTime");
    if (lastVisitedTime) {
        alert("Последнее посещение: " + lastVisitedTime);
    } else {
        alert("Добро пожаловать!");
    }
};