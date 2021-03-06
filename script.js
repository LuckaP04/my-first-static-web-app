

    var image1=new Image()
    image1.src="obr1.png"
    var image2=new Image()
    image2.src="obr2.png"

    function myFunction(imgs) {
        // Get the expanded image
        var expandImg = document.getElementById("expandedImg");
        // Get the image text
        var imgText = document.getElementById("imgtext");
        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = imgs.src="nahrdelniku.jpg";
        imgs.src="květiny1u.jpg";
        imgs.src="nausnice2u.jpg";
        imgs.src="hrnkyp.jpg";

        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        imgText.innerHTML = imgs.alt="Snow";imgs.alt="Nature";
        imgs.alt="Mountains";
        imgs.alt="light";
        // Show the container element (hidden with CSS)
        expandImg.parentElement.style.display = "block";
    }

