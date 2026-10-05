function startWebsite() {

    document.getElementById("opening").style.display = "none";

    document.getElementById("birthday").style.display = "flex";

    const music = document.getElementById("birthdayMusic");

    music.play();
}


function showMemories() {

    document.getElementById("birthday").style.display = "none";

    document.getElementById("memories").style.display = "flex";

}


function showFinal() {

    document.getElementById("memories").style.display = "none";

    document.getElementById("final").style.display = "flex";

}