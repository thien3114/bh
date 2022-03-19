var seacrch = document.querySelector(".seacrch");
var searchlogo =document.querySelector(".searchlogo");
var img = document.querySelector(".img");
  var dt = [
    {
      id: "13",
      img: "https://cdn.tgdd.vn/Products/Images/42/250261/iphone-13-pro-max-gold-1-600x600.jpg",
    },
    {
      id: "12",
      img: "https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-vang-new-600x600-600x600.jpg",
    },
    {
      id: "11",
      img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-vang-200x200.jpg",
    },
    {
      id: "10",
      img: "https://cdn.tgdd.vn/Files/2019/10/01/1203623/gadgetmatch-iphone-xs-iphone-xs-max-20180927-05_800x450.jpg",
    },
  ];
 function myScript() {
     for(var i=0;i<dt.length;i++){
        if (seacrch.value === dt[i].id) {
        img.src="";
        img.src = dt[i].img;
        img.style.width  = "50%";
        return;
        } 
     }
    alert("Khoong tìm thấy");
        
 }
