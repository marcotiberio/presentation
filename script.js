// STOP PULSING ANIMATION
document.getElementById('blink1').addEventListener(
    'webkitAnimationEnd',
    function(){
        document.getElementById('blink1').style.display = 'none';
        document.getElementById('blink2').style.display = 'none';
        document.getElementById('blink3').style.display = 'none';
    },
    false
);
