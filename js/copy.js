const clipboard = new ClipboardJS('.btn');
const btns = document.querySelectorAll('.btn');
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('mouseleave',clearTooltip);
}
function clearTooltip(e){
    e.currentTarget.setAttribute('class','btn btn-outline-secondary rounded-pill');
}
function showTooltip(elem){
    elem.setAttribute('class','btn btn-outline-secondary rounded-pill tooltip-code');
}
clipboard.on('success', function(e) {
    showTooltip(e.trigger);
});