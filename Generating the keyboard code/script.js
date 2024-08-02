window.addEventListener("keydown", (e) => {
    document.getElementById("result").innerHTML = `
        The key pressed is <span>${e.key}</span> 
        <span>Key Code: ${e.keyCode}</span>
    `;

    console.log(`Key: ${e.key}, Key Code: ${e.keyCode}`);

    playSound();
    if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
        let combination = [];
        if (e.ctrlKey) combination.push('Ctrl');
        if (e.altKey) combination.push('Alt');
        if (e.shiftKey) combination.push('Shift');
        if (e.metaKey) combination.push('Meta');
        combination.push(e.key);
        document.getElementById("result").innerHTML += `
            <div>Combination: ${combination.join(' + ')}</div>
        `;
    }
});

function playSound() {
    let audio = new Audio('spacebar-click-keyboard-199448.mp3'); // Add the path to your audio file
    audio.play();
}

let keyHistory = [];
window.addEventListener("keydown", (e) => {
    keyHistory.push(e.key);
    if (keyHistory.length > 10) keyHistory.shift(); 
    console.log(keyHistory); 
});