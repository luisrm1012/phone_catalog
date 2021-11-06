import { useEffect,useState } from "react";
import { myAPI } from "..";

function usePhones(phoneToFind) {

    const [phones,showPhones] = useState([]);// phones is the array containing the list of phones (objects) in the catalog

    useEffect( () => {
        if (phoneToFind == "") {
            fetch(myAPI + "/phones") //API URL
            .then(response => response.json())
                .then(data => {
                showPhones(data);
            })
            .catch(error => console.log('error', error));
        }
        else{
            fetch(myAPI + "/phone=" + phoneToFind) //API URL
            .then(response => response.json())
            .then(data => {
                showPhones(data);
            })
            .catch(error => console.log('error', error));

        }

    },[phoneToFind])
    
    return phones
}

export default usePhones;