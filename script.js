// XML FORMATINDA İSTEK ATMA BU ŞEKİLDE GERÇEKLEŞTİRDİM   ----  ÖRNEK 1 ----
/******************************************************/
// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         }else if (xhr.status === 404){
//             console.log("kaynak bulunamadı");
//         }
//     }
// }

// xhr.onprogress = function () {
//     console.log("on progressing");
// }
// xhr.open("GET","msg.txt",true);
// xhr.send();
// console.log("çalıştı");



/******************************************************/
// SAYILARIN KARŞILIK BULAN ANLAMALARI               
/*  
readyState : 
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/
/*
    status : 
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
*/

//  JSON VERİDEN DATA ÇEKME İŞLEMİNİ GERÇEKLEŞTİRDİM           ----  ÖRNEK 2 ----

// function loadEmployee() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "employess.json", true);
//     xhr.onload = function(){
//             console.log("calıstı");
//             if (this.status === 200) {
//                 let employees = JSON.parse(this.responseText)
//                 let html = "";
//                 employees.forEach(employee => {
//                     html += 
//                     `
//                         <tr>
//                             <td>${employee.firstName}</td>
//                             <td>${employee.lastName}</td>
//                             <td>${employee.age}</td>
//                             <td>${employee.retired}</td>
//                         </tr>
//                     ` ;
//                 });
//                 document.querySelector("#employees").innerHTML = html;
//             }
//         }
//     xhr.send();
// }



//   REST APİ Üzerinden data çekme işlemi gerçekteştirdim   json placeholderden data çekildi   ----  ÖRNEK 3 ----


document.querySelector("#getOne").addEventListener("click", getOne);
document.querySelector("#getAll").addEventListener("click", getAll);



function getOne() {
    var id = document.getElementById("post").value;
    var url ="https://jsonplaceholder.typicode.com/posts/"+ id;
    var xhr = new XMLHttpRequest;
    xhr.open("GET",url,true);
    xhr.onload = function () {
        if (this.status === 200) {
            var post = JSON.parse(this.responseText);
            var html = ""; 
                html += 
                    `
                        <div class="card mb-2">
                            <div class="card-header">
                              ${post.id}-.${post.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                <p>
                                    ${post.body}
                                </p>
                                </blockquote>
                            </div>
                        </div>     
                    `
            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();
}


function getAll() {
    var url ="https://jsonplaceholder.typicode.com/posts/";
    var xhr = new XMLHttpRequest;
    xhr.open("GET",url,true);
    xhr.onload = function () {
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            var html = ""; 
            posts.forEach(post => { 
                html += 
                    `
                        <div class="card mb-2">
                            <div class="card-header">
                                ${post.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                <p>
                                    ${post.body}
                                </p>
                                </blockquote>
                            </div>
                        </div>     
                    `
            });
            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();
}






