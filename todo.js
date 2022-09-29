let arr = [];
//--------------------btns for creation of data & Output the data------------------
let btnShow = document.getElementById("btnShow");
let btnCreate = document.getElementById("btnCreate");
btnShow.addEventListener("click", () => {
  let tables = document.getElementById("table");
  tables.setAttribute("class", "tab");
  if (tables.style.display == "block") {
    tables.style.display = "none";
    console.log(tables.style.display);
  } else {
    tables.style.display = "block";
    console.log(tables.style.display);
  }
});
btnCreate.addEventListener("click", () => {
  let forms = document.getElementById("first");
  forms.setAttribute("class", "iform");
  if (forms.style.display == "block") {
    forms.style.display = "none";
    console.log(forms.style.display);
  } else {
    forms.style.display = "block";
    console.log(forms.style.display);
  }
  console.log(forms);
});

//-----------------------end of above-------------------------

function n() {
  let student = document.getElementById("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.setAttribute("class", "th1");
  th1.innerText = "Name";
  // let th2 = document.createElement("th");
  // th2.innerText = "Last Name";
  let th3 = document.createElement("th");
  th3.setAttribute("class", "rlClSec");
  th3.innerText = "Roll-No";
  let th4 = document.createElement("th");
  th4.setAttribute("class", "rlClSec");
  th4.innerText = "Class";
  // let th5 = document.createElement("th");
  // th5.setAttribute("class", "rlClSec")

  // th5.innerText = "Section";
  let th6 = document.createElement("th");
  th6.innerText = "Date of Birth";
  let th7 = document.createElement("th");
  th7.setAttribute("class", "cont");
  th7.innerText = "Contact";
  let th8 = document.createElement("th");
  th8.innerText = "Email-ID";
  let th9 = document.createElement("th");
  th9.innerText = "Created-On";
  let th12 = document.createElement("th");
  th12.innerText = "Updated-On";
  let th10 = document.createElement("th");
  th10.innerText = "Edit Data";
  let th11 = document.createElement("th");
  th11.innerText = "Delete Data";

  tr.append(th1, th3, th4, th6, th7, th8, th9, th12, th10, th11);
  thead.append(tr);
  student.append(thead);
  let tbody = document.createElement("tbody");
  tbody.setAttribute("id", "tablebody");
  student.append(tbody);
  //-----------If
  JSON.parse(localStorage.getItem("data")).forEach((element) => {
    arr.push(element);
  });
  //------------display data in table form--------------------------
  JSON.parse(localStorage.getItem("data")).forEach((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = element.firstname + " " + element.lastname;
    td1.setAttribute("class", "th1");

    // let td2 = document.createElement("td");
    // td2.innerText = element.lastname;
    let td3 = document.createElement("td");
    td3.innerText = element.rlno;

    let td4 = document.createElement("td");
    td4.innerText = element.cla + "/" + element.sct;

    // let td5 = document.createElement("td");
    // td5.innerText = element.sct;

    let td6 = document.createElement("td");
    td6.innerText = element.db;

    let td7 = document.createElement("td");
    td7.innerText = element.ph;

    let td8 = document.createElement("td");
    td8.innerText = element.em;

    let td9 = document.createElement("td");
    td9.innerText = element.dat;

    let td12 = document.createElement("td");
    td12.innerText = element.datUpdated;

    let td10 = document.createElement("td");
    let edit = document.createElement("img");
    edit.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png";
    edit.setAttribute("id", index);
    edit.addEventListener("click", (e) => {
      let ind = e.target.id;
      // console.log(e)
      let change = JSON.parse(localStorage.getItem("data"));
      let { firstname, lastname, rlno, cla, sct, db, ph, em, datUpdated } =
        change[ind];
      // console.log(change[ind].dat);
      document.getElementById("fnam").value = firstname;
      document.getElementById("lnam").value = lastname;
      document.getElementById("rollnos").value = rlno;
      document.getElementById("classs").value = cla;
      document.getElementById("sect").value = sct;
      document.getElementById("dobs").value = db;
      document.getElementById("nos").value = ph;
      document.getElementById("emails").value = em;
      // change[ind].dat = dat;
      document.getElementById("updateDate").value = datUpdated;

      let ab = document.getElementById("containers");
      ab.setAttribute("id", "show");
      let bs = document.getElementById("update");
      bs.setAttribute("class", ind);
      console.log(bs);
    });

    // edit.setAttribute("href", "update.html");

    td10.append(edit);

    //---------------Delete code--------------------------
    let td11 = document.createElement("td");
    let delet = document.createElement("img");
    delet.src = "https://img.icons8.com/ios-glyphs/344/filled-trash.png";
    delet.setAttribute("id", index);
    td11.append(delet);

    delet.addEventListener("click", (e) => {
      let ind = e.target.id;
      console.log(ind)
      alert("Are you sure to delete row"+ ind)
      let newdata = JSON.parse(localStorage.getItem("data"));
      newdata.splice(ind, 1);
      localStorage.setItem("data", JSON.stringify(newdata));
      location.reload();
    });
    //---------------above delete code---------------------
    tr.append(td1, td3, td4, td6, td7, td8, td9, td12, td10, td11);
    tbody.append(tr);
  });
  let byName = document.getElementById("byName");
  byName.addEventListener("click", () => {
    let search = JSON.parse(localStorage.getItem("data"));
    let tbByname = search.sort(function (a, b) {
      if (a.firstname > b.firstname) {
        return 1;
      }
      if (a.firstname < b.firstname) {
        return -1;
      }
      return 0;
    });
    console.log(tbByname);
    if (tbody.style.display == "block") {
      // student.style.display = "block";
      tbody.style.display = "none";
    } else {
      tbByname.forEach((element, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.firstname;
        let td2 = document.createElement("td");
        td2.innerText = element.lastname;
        let td3 = document.createElement("td");
        td3.innerText = element.rlno;

        let td4 = document.createElement("td");
        td4.innerText = element.cla;

        let td5 = document.createElement("td");
        td5.innerText = element.sct;

        let td6 = document.createElement("td");
        td6.innerText = element.db;

        let td7 = document.createElement("td");
        td7.innerText = element.ph;

        let td8 = document.createElement("td");
        td8.innerText = element.em;

        let td9 = document.createElement("td");
        td9.innerText = element.dat;
        let td12 = document.createElement("td");
        td12.innerText = element.datUpdated;
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td12);

        tbody.append(tr);
        tbody.style.display = "block";
        // location.reload();
        console.log(tbody);
      });
    }
  });

  let byRoll = document.getElementById("myInput");

  byRoll.addEventListener("click", () => {
    let hd = document.createElement("thead");
    let tblRoll = document.getElementById("table");
    let tbody2 = document.createElement("tbody");
    hd.setAttribute("id", "hd");
    hd.innerText = "Sorting: ";

    let localData = JSON.parse(localStorage.getItem("data"));
    let tbnew = localData.sort((a, b) => a.rlno - b.rlno);
    if (tbody2.style.display == "block") {
      // student.style.display = "block";
      tbody2.style.display = "none";
    } else {
      tbnew.forEach((element, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.firstname + " " + element.lastname;
        // let td2 = document.createElement("td");
        // td2.innerText = element.lastname;
        let td3 = document.createElement("td");
        td3.innerText = element.rlno;

        let td4 = document.createElement("td");
        td4.innerText = element.cla + "/" + element.sct;

        // let td5 = document.createElement("td");
        // td5.innerText = element.sct;

        let td6 = document.createElement("td");
        td6.innerText = element.db;

        let td7 = document.createElement("td");
        td7.innerText = element.ph;

        let td8 = document.createElement("td");
        td8.innerText = element.em;

        let td9 = document.createElement("td");
        td9.innerText = element.dat;
        let td12 = document.createElement("td");
        td12.innerText = element.datUpdated;
        tr.append(td1, td3, td4, td6, td7, td8, td9, td12);
        tbody2.append(hd, tr);
        tblRoll.append(tbody2);
        tbody2.style.display = "block";
        // location.reload();
        console.log(tbody2);
      });
    }
  });
}
n();

function show() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let rollno = document.getElementById("rollno").value;
  let clss = document.getElementById("claass").value;
  let section = document.getElementById("section").value;
  let dob = document.getElementById("dob").value;
  let phno = document.getElementById("no").value;
  let email = document.getElementById("email").value;

  let datetime = new Date().toLocaleDateString();

  let c = JSON.parse(localStorage.getItem("data"));
  if (
    fname == null ||
    fname == "" ||
    lname == null ||
    lname == "" ||
    rollno == null ||
    rollno == ""
  ) {
    alert("Fields can't be blank");

    c.map((element) => {
      //  let rol = element.rlno;
      console.log(element.rlno);
      if (element.rlno == rollno) {
        alert("Already Exist");
      }
      // else if(
      //     fname == null ||
      //     fname == "" ||
      //     lname == null ||
      //     lname == ""||
      //     rollno == null||
      //     rollno == ""
      //   )
    });
  } else {
    let obj = {
      firstname: fname,
      lastname: lname,
      rlno: rollno,
      cla: clss,
      sct: section,
      db: dob,
      ph: phno,
      em: email,
      dat: datetime,
      datUpdated: "",
    };
    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
    location.reload();
  }
}
//-------------Data searching-------------------------
function searching() {
  let searchData = document.getElementById("searchdata").value;
  let lsData = JSON.parse(localStorage.getItem("data"));
  let printTable = document.getElementById("table");
  let tbody3 = document.getElementById("tablebody");
  let tbody = document.createElement("tbody");

  let len = searchData.length;
  console.log(len, searchData);

  if (len > 0) {
    let html = [];
    for (let i = 0; i < lsData.length; i++) {
      if (lsData[i].firstname == searchData || lsData[i].lastname == searchData ||lsData[i].rlno== searchData) {
        let row =
          "<tr>" +
          "<td>" +
          lsData[i].firstname +
          " " +
          lsData[i].lastname +
          "</td>" +
          "<td>" +
          lsData[i].rlno +
          "</td>" +
          "<td>" +
          lsData[i].cla +
          "/" +
          lsData[i].sct +
          "</td>" +
          "<td>" +
          lsData[i].db +
          "</td>" +
          "<td>" +
          lsData[i].ph +
          "</td>" +
          "<td>" +
          lsData[i].em +
          "</td>" +
          "<td>" +
          lsData[i].dat +
          "</td>" +
          "<td>" +
          lsData[i].datUpdated +
          "</td>" +
          "</tr>";
        // console.log(html);
        html.push(row);
      }
    }
    if (html != []) {
      tbody3.innerHTML = html.join(" ");
      // tbody3.append(tr);
      printTable.append(tbody3);
      //printTable.append(tbody3)
      console.log(tbody3);
      // if(html!= ""){
      // html='<ul>'+html+'</ul>'
    }
  }
}

let up = document.getElementById("update");
up.addEventListener("click", (e) => {
  let vikas = up.getAttribute("class");

  // console.log(fname);
  //console.log("HELL", localStorage.getItem("dat"));

  let dateUpd = document.getElementById("updateDate").value;
  //console.log(dateUpd);
  if (!dateUpd) {
    dateUpd = new Date().toLocaleDateString();
    console.log(dateUpd);
  }
  // let change = JSON.parse(localStorage.getItem("data"));

  // alert(newDate);

  let changes = JSON.parse(localStorage.getItem("data"));
  let obj = {
    firstname: document.getElementById("fnam").value,
    lastname: document.getElementById("lnam").value,
    rlno: document.getElementById("rollnos").value,
    cla: document.getElementById("classs").value,
    sct: document.getElementById("sect").value,
    db: document.getElementById("dobs").value,
    ph: document.getElementById("nos").value,
    em: document.getElementById("emails").value,
    dat: changes[vikas].dat,
    datUpdated: dateUpd,
  };

  let { firstname, lastname, rlno, cla, sct, db, ph, em, datUpdated } = obj;
  changes.map((element) => {
    //  let rol = element.rlno;
    // console.log(element.rlno);
    if (element.rlno == rlno) {
      console.log(rlno, element.rlno);
      alert("Already Exist");
      if (
        firstname == null ||
        firstname == "" ||
        lastname == null ||
        lastname == "" ||
        rlno == null ||
        rlno == ""
      ) {
        alert("Name can't be blank");
      }
    } else if (element.rlno != rlno) {
      // }
      changes.splice(vikas, 1, obj);
      localStorage.setItem("data", JSON.stringify(changes));

      location.reload();
    }
  });
});

// function sum(arr, index) {
//   if(index== arr.length){
//     return 0;
//   }
//   return arr[index]+sum(a, index+1);
// }
// const ar = [1,2,3];
// // sum(ar);
// console.log(sum(ar, 0))
// // console.log(a);

// function sum(arr) {
//   if(arr == 0){
//     return 0;
//   }if(arr == 1){
//     return 1;
//   }
//   return sum(arr-2)+sum(arr-1);
// }
// const ar = 2;
// // sum(ar);
// for(i=0; i<ar; i++){
// console.log(sum(i))
// }// console.log(a);

// function fact(num){
//   if(num == 0){
//     return 1;

//   }
//   //num* num-1
//   // console.log("efer",num);
//   return num*fact(num-1);
// }
// console.log("fact",fact(5));
