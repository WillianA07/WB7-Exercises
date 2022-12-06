
"use strict"

// {
//     "id": 102693,
//     "sol": 1000,
//     "camera": {
//         "id": 20,
//         "name": "FHAZ",
//         "rover_id": 5,
//         "full_name": "Front Hazard Avoidance Camera"
//     },
//     "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
//     "earth_date": "2015-05-30",
//     "rover": {
//         "id": 5,
//         "name": "Curiosity",
//         "landing_date": "2012-08-06",
//         "launch_date": "2011-11-26",
//         "status": "active"
//     }
// }

window.onload = function () {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zIGcuM3FoUAfw0VtVGlFAacbgUQFlJHhFVb1zS1I")
        .then(x1 => x1.json())
        .then(y => {
            let data = y.photos;
            for (let i = 0; i < 10; i++) {
                createAccordion(data[i]);
            }
        });
}

function createAccordion(x) {
    const accordionExample = document.getElementById("accordionExample");

    let divClass1 = document.createElement("div");
    divClass1.className = "accordion-item";

    let accordTitle = document.createElement("h2");
    accordTitle.className = "accordion-header";
    accordTitle.id = x.id;//////////////////////////////////
    divClass1.appendChild(accordTitle);

    let titleBtn = document.createElement("button");
    titleBtn.className = "accordion-button";
    titleBtn.type = "button";
    titleBtn.setAttribute("data-bs-toggle" , "collapse");
    titleBtn.setAttribute("data-bs-target" , "#collapse" + x.id);/////////////////////////////
    titleBtn.setAttribute("aria-expanded" , "false");
    titleBtn.setAttribute("aria-controls" , "collapse" + x.id);/////////////////////////////
    titleBtn.textContent = x.earth_date;/////////////////////////////
    accordTitle.appendChild(titleBtn);

    let divClass2 = document.createElement("div");
    divClass2.id = "collapse" + x.id;///////////////////////////
    divClass2.className = "accordion-collapse collapse show";
    divClass2.setAttribute("aria-labelledby" , x.id);/////////////////////////////
    divClass2.setAttribute("data-bs-parent" , "#accordionExample");
    divClass1.appendChild(divClass2);

    let accordBody = document.createElement("div");
    accordBody.className = "accordion-body";
    divClass2.appendChild(accordBody);

    let d1 = document.createElement("div");
    d1.className = "row";
    
    //Create Img section
    let d2 = document.createElement("div");
    d2.className = "col-6";
    let img = document.createElement("img");
    img.src = x.img_src;////////////////////////////////////
    // img.alt = x;////////////////////////////////////
    d2.appendChild(img);
    d1.appendChild(d2);

    //Create Text Section
    let d3 = document.createElement("div");
    d3.className = "col-6";

    //Camera Title Section
    let dd1 = document.createElement("div");
    dd1.className = "col-12";
    let dd1Title = document.createElement("h5");
    dd1Title.textContent = "Camera";
    dd1.appendChild(dd1Title);
    d3.appendChild(dd1);

    //Camera Body Section
    let dd2 = document.createElement("div");
    dd2.className = "row";
    let ddd1 = document.createElement("div");
    ddd1.className = "col-6";
    let camTitle = document.createElement("p")
    camTitle.textContent = "Full Name:";
    ddd1.appendChild(camTitle);
    let ddd2 = document.createElement("div");
    ddd2.className = "col-6";
    let camName = document.createElement("p");
    camName.textContent = x.camera.full_name;/////////////////////////////
    ddd2.appendChild(camName);
    dd2.appendChild(ddd1);
    dd2.appendChild(ddd2);
    d3.appendChild(dd2);

    //Rover Title Section
    let dd3 = document.createElement("div");
    dd3.className = "col-12";
    let dd3Title = document.createElement("h5");
    dd3Title.textContent = "Rover";
    dd3.appendChild(dd3Title);
    d3.appendChild(dd3);

    //Rover Name Section
    let dd4 = document.createElement("div");
    dd4.className = "row";
    let ddd3 = document.createElement("div");
    ddd3.className = "col-6";
    let rovTitle = document.createElement("p")
    rovTitle.textContent = "Name:";
    ddd3.appendChild(rovTitle);
    let ddd4 = document.createElement("div");
    ddd4.className = "col-6";
    let rovName = document.createElement("p");
    rovName.textContent = x.rover.name;/////////////////////////////
    ddd4.appendChild(rovName);
    dd4.appendChild(ddd3);
    dd4.appendChild(ddd4);
    d3.appendChild(dd4);

    //Rover Landing Date Section
    let q = document.createElement("div");
    q.className = "row";
    let qq = document.createElement("div");
    qq.className = "col-6";
    let subTitle = document.createElement("p")
    subTitle.textContent = "Landing Date:";
    qq.appendChild(subTitle);
    let qq1 = document.createElement("div");
    qq1.className = "col-6";
    let landDate = document.createElement("p");
    landDate.textContent = x.rover.landing_date;/////////////////////////////
    qq1.appendChild(landDate);
    q.appendChild(qq);
    q.appendChild(qq1);
    d3.appendChild(q);

    //Rover Launch Date Section
    let w = document.createElement("div");
    w.className = "row";
    let ww = document.createElement("div");
    ww.className = "col-6";
    let subTitle1 = document.createElement("p")
    subTitle1.textContent = "Launch Date:";
    ww.appendChild(subTitle1);
    let ww1 = document.createElement("div");
    ww1.className = "col-6";
    let launchDate = document.createElement("p");
    launchDate.textContent = x.rover.launch_date;/////////////////////////////
    ww1.appendChild(launchDate);
    w.appendChild(ww);
    w.appendChild(ww1);
    d3.appendChild(w);

    //Rover Status Section
    let z = document.createElement("div");
    z.className = "row";
    let zz = document.createElement("div");
    zz.className = "col-6";
    let subTitle2 = document.createElement("p")
    subTitle2.textContent = "Status:";
    zz.appendChild(subTitle2);
    let zz1 = document.createElement("div");
    zz1.className = "col-6";
    let rovStatus = document.createElement("p");
    rovStatus.textContent = x.rover.status;/////////////////////////////
    zz1.appendChild(rovStatus);
    z.appendChild(zz);
    z.appendChild(zz1);
    d3.appendChild(z);

    d1.appendChild(d3);
    accordBody.appendChild(d1);
    accordionExample.appendChild(divClass1);
}