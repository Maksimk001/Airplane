let towers = document.querySelectorAll('div.tower')
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName == "Space" || keyName == "W" || keyName == 'ц' || keyName == 'Ц'){
        alert('up')
    }
});


towers[0].style.bottom = 0
towers[0].style.left = '510px'