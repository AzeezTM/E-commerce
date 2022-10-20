import { Axios } from "axios";
const http = () => {
    const http = Axios.create({
        baseURL: "https://fakestoreapi.com"
        //use json placeholder
    })

}
export default http;