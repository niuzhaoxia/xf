let w = getClientWidth()
document.documentElement.style.fontSize = w * 100 / 750 + 'px';
function getClientWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth;
}