var x = document.getElementById("boxEdit");
var y = document.getElementById("boxAdd");

function btnEdit() {
    x.style.display = "block";
    y.style.display = "none";
}

function btnAdd() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";

    } else {
        y.style.display = "none";

    }
}

function btnClose() {
    y.style.display = "none";
    x.style.display = "none";
}

//Box Add

// const boxAdd = document.querySelector(".box-add");
// const btnAdd = document.querySelector(".btn-add");

// const maincontentManage = document.querySelector(".box-table");

// btnAdd.addEventListener("click", () => {
//   if (boxAdd.className === "box-add") boxAdd.classList.add("open");
//   else boxAdd.classList.remove("open");
//   boxEdit.classList.add("open");
// });
// btnAdd.addEventListener("click", () => {
//   if (maincontentManage.className === "maincontentmanage")
//     maincontentManage.classList.add("open");
//   else maincontentManage.classList.remove("open");
// });

//Box Edit
// const boxEdit = document.querySelector(".box-edit");
// const btnEdit = document.querySelector(" .btn-edit");

// btnEdit.addEventListener("click", () => {
//   if (boxEdit.className === "box-edit") boxEdit.classList.add("open");
//   else boxEdit.classList.remove("open");
//   boxAdd.classList.add("open");
// });

// btnEdit.addEventListener("click", () => {
//   if (maincontentManage.className === "maincontentmanage")
//     maincontentManage.classList.add("open");
//   else maincontentManage.classList.remove("open");
// });