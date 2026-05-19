const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const downloadBtn = document.getElementById("downloadBtn");

let uploadedImage = null;

fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            uploadedImage = e.target.result;
            preview.src = uploadedImage;
        }

        reader.readAsDataURL(file);
    }
});

function convertImage(){
    const format = document.getElementById("format").value;

    if(!uploadedImage){
        alert("Please upload image first");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img,0,0);

        const converted = canvas.toDataURL(`image/${format}`);

        preview.src = converted;
        downloadBtn.href = converted;
        downloadBtn.download = `converted-image.${format}`;
    }

    img.src = uploadedImage;
}
function compressImage() {
    if(!uploadedImage){
        alert("Please upload image first");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img,0,0);

        const compressed = canvas.toDataURL("image/jpeg", 0.5);

        preview.src = compressed;
        downloadBtn.href = compressed;
        downloadBtn.download = "compressed-image.jpg";
    }

    img.src = uploadedImage;
}
const downloadBtn =
document.getElementById("downloadBtn");

downloadBtn.addEventListener(
"click",
()=>{

const image =
document.querySelector("img");

if(!image){
alert("Upload image first");
return;
}

const a =
document.createElement("a");

a.href=image.src;

a.download="converted-image";

a.click();

}
);
const fileInput =
document.querySelector("input");

const preview =
document.querySelector("img");

const convertBtn =
document.querySelector("button");

convertBtn.addEventListener(
"click",
()=>{

if(!fileInput.files[0]){

alert("Upload image first");

return;

}

const file =
fileInput.files[0];

const reader =
new FileReader();

reader.onload=function(e){

preview.src=e.target.result;

alert("Image Ready ✅");

};

reader.readAsDataURL(file);

}
);
