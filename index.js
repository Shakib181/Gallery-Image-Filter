var filter_btn = document.getElementById("filter_btn").children;

var item = document.getElementById("parent-div").children;

    for(var i=0; i<filter_btn.length;i++){
        filter_btn[i].addEventListener("click",function(){
            for( var j=0; j<filter_btn.length;j++){
                filter_btn[j].classList.remove("active");
            }
            this.classList.add("active");

            var target = this.getAttribute("data-target");

        for(var k=0; k<item.length;k++){
            item[k].style.display="none";

            if(target==item[k].getAttribute("data-id")){
                item[k].style.display="block";
            }
            if(target=="all"){
                item[k].style.display="block";
            }
        }
        });
    }
    

    