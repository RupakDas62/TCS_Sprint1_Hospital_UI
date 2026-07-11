if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../index.html";

}

const table=document.getElementById("patientTable");

const search=document.getElementById("searchInput");

const prevBtn=document.getElementById("prevBtn");

const nextBtn=document.getElementById("nextBtn");

const pageNumber=document.getElementById("pageNumber");

const rowsPerPage=10;

let currentPage=1;

let patients=Storage.getPatients().filter(patient=>patient.active);

function renderTable(){

    table.innerHTML="";

    const keyword=search.value.toLowerCase();

    const filtered=patients.filter(patient=>{

        return patient.patientId.toLowerCase().includes(keyword)

        ||

        (patient.firstName+" "+patient.lastName).toLowerCase().includes(keyword);

    });

    const totalPages=Math.ceil(filtered.length/rowsPerPage)||1;

    if(currentPage>totalPages){

        currentPage=totalPages;

    }

    const start=(currentPage-1)*rowsPerPage;

    const end=start+rowsPerPage;

    const pageData=filtered.slice(start,end);

    pageData.forEach(patient=>{

        table.innerHTML+=`

        <tr>

        <td>${patient.patientId}</td>

        <td>${patient.firstName} ${patient.lastName}</td>

        <td>${patient.age}</td>

        <td>${patient.gender}</td>

        <td>${patient.disease}</td>

        <td>${patient.doctor}</td>

        <td>${patient.roomType}</td>

        <td>${patient.phone}</td>

        </tr>

        `;

    });

    pageNumber.textContent=`Page ${currentPage} of ${totalPages}`;

    prevBtn.disabled=currentPage===1;

    nextBtn.disabled=currentPage===totalPages;

}

search.addEventListener("keyup",()=>{

    currentPage=1;

    renderTable();

});

prevBtn.addEventListener("click",()=>{

    currentPage--;

    renderTable();

});

nextBtn.addEventListener("click",()=>{

    currentPage++;

    renderTable();

});

renderTable();