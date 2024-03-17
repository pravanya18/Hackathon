import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

class EsgService {
    getEsgBenchmarkDoc(esg){
       return axios.get("http://localhost:3200/data/esgResponse", esg);
    }

    getPdfUrl(esg){
        return axios.get("http://localhost:3200/data/pdfUrlPath", esg);
     }

     getEsgBenchmarkIndicator(esg){
        return axios.get("http://localhost:3200/data/esgResponseIndicator", esg);
     }
    
}

export default new EsgService();