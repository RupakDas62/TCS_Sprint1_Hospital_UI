const Storage = {

    getPatients(){

        return JSON.parse(localStorage.getItem("patients")) || [];

    },

    savePatients(data){

        localStorage.setItem("patients",JSON.stringify(data));

    },

    generateId(){

        let id=localStorage.getItem("patientCounter");

        if(!id){

            id=1000;

        }

        id++;

        localStorage.setItem("patientCounter",id);

        return "P"+id;

    }

}