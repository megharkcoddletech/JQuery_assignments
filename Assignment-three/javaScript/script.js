$(document).ready(function () {
    let imgArray = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg"];
    let count = 0;
    let b1 = $(document.createElement('button'))
    b1.css({"padding" : "10px 30px", "font-weight" : "bold", "font-size" : "20px", "margin" : "20px"})
    $('body').append(b1);
    b1.text("Click");
    b1.click(function () {
        count++;
        if (count === 1) {
            let para = $(document.createElement('h1'));
            para.text("Click again to show the images");
            para.css({"color" : "blue" , "font-size" : "20px"})
            $('body').append(para);
        }
        if (count === 2) {
            let imageContainer = $(document.createElement('div'));
            imageContainer.css({"width" : "300px", "height" : "300px"})
            $('body').append(imageContainer);
            let img = $(document.createElement('img'));
            img.css({"width" : "100%", "height" : "100%", "object-fit" : "contain"})
            imageContainer.append(img);
            img.attr('src', imgArray[0]);
            let b2 = $(document.createElement('button'));
            $('body').append(b2);
            b2.css({"padding" : "10px 30px", "color" : "teal", "font-weight" : "bold", "font-size" : "20px", "margin" : "20px"})
            b2.text('Next');
            let currentImage = 0;
            b2.click(function () {
                currentImage++;
                img.attr('src', imgArray[currentImage]);
                if (currentImage > imgArray.length) {
                    currentImage = 0;
                    img.attr('src', imgArray[currentImage]);
                }
            });
        }
    });
});
