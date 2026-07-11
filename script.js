document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Tombol Buka BAB VI
    // ==========================
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", () => {
            document.getElementById("intro").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // ==========================
    // Musik
    // ==========================
    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    if (music && musicButton) {

        let playing = false;

        musicButton.addEventListener("click", () => {

            if (playing) {
                music.pause();
                musicButton.innerHTML = "♫";
            } else {
                music.play();
                musicButton.innerHTML = "❚❚";
            }

            playing = !playing;

        });

    }

});


// ==========================
// Progress Bar
// ==========================

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progress-bar");

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});
// ==========================================
// Password Lampiran II
// ==========================================

function bukaLampiran2(){

    const password =
        document.getElementById("password2").value.trim().toUpperCase();

    if(password === "AMAGARAPATI"){

        document.getElementById("lock2").style.display = "none";

        document.getElementById("isiLampiran2").style.display = "block";

    }else{

        document.getElementById("pesan2").innerHTML =
            "Kode verifikasi belum sesuai. Coba periksa kembali hadiahnya.";

    }

}
// ==========================================
// Password Lampiran III
// ==========================================

function bukaLampiran3(){

    const password =
        document.getElementById("password3").value.trim().toUpperCase();

    if(password === "SEBLAK"){

        document.getElementById("lock3").style.display = "none";

        document.getElementById("isiLampiran3").style.display = "block";

    }else{

        document.getElementById("pesan3").innerHTML =
            "Kode verifikasi belum sesuai. Coba periksa kembali hadiahnya.";

    }

}