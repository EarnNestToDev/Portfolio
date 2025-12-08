// ( i ) Clase global para distintos métodos

// ( i ) Clase global de CSS
// class glob_css {

//     color_orange_900 = "";

//     constructor() {
//         this.color_orange_900 = "";
//     }

//     function varNameColor(color) {
//     return "var(--" + color + ")";
// }
// }

function open_popup() {
    document.getElementById('img_popup').style.display = 'flex';
}


function popup_load() {
    try {
        document.getElementById('close_popup').addEventListener('click', function () {
            document.getElementById('img_popup').style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target == document.getElementById('img_popup')) {
                document.getElementById('img_popup').style.display = 'none';
            }
        });
    } catch (error) {
        console.log(error);
    }

    console.log("<< popup rdy! >>");
}