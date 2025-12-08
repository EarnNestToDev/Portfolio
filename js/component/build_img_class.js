const img_title = "img_title";

function show_img_popup(path, n_img) {
    var class_img = "";
    // class_img += "<div class='img__popup_article_content'>";

    class_img += build_img_class(path, n_img);
    // class_img += "</div>";

    console.log(class_img);
    document.getElementById("img_popup_article").innerHTML = class_img;
}

function build_img_class(path_folder_img, n_img) {
    var img_src = "";
    img_src += "<div>";
    img_src += "<img src='" + path_folder_img + "/" + img_title + ".webp' alt='" + img_title + "'>";
    img_src += "</div>";

    for (let index = 1; index <= n_img; index++) {
        img_src += "<div>";
        img_src += "<img src='" + path_folder_img + "/" + index + ".webp' alt='img_" + index + "'>";
        img_src += "</div>";
    }



    return img_src;
}