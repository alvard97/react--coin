

//this class is created using singletone pattern

class FetchService {

    static instance = null;
    constructor(){
        if(FetchService.instance){
            
            return FetchService.instance
        }
        FetchService.instance = this;


    }
    get(){

    }
}

const fetchService = new FetchService();
export default fetchService

