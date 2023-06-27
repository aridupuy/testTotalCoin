// @ts-ignore
import {constants} from "http2";
import {Button} from "../model/button";

class ApiCalls {
    private basePath :string = "http://127.0.0.1:8080";

    public async createButton() {
        let posts: Button;
        let setPosts = (data: Button)=>{
            posts = data;
        }
        await fetch(this.basePath + "/api/button", {method: "PUT"})
            .then((response) => response.json())
            .then((buttons: Button) => setPosts(buttons))
            .catch((err) => {
                console.log(err.message);
            });
        return posts!;
    }

    public async getAllButtons(): Promise<any> {
        let posts;
        let setPosts = (data: any)=>{
            posts = data;
        }
        await fetch(this.basePath + "/api/button", {method: "GET"})
            .then((response) => response.json())
            .then((buttons) => setPosts(buttons))
            .catch((err) => {
                console.log(err.message);
            });

        return posts;
    }

    public async deleteButton(id:number): Promise<any> {
        let posts;
        let setPosts = (data: any) => {
            posts = data;
        }
        await fetch(this.basePath + `/api/button/${id}`, {method: "delete"})
            .then((response) => response.json())
            .then((buttons) => setPosts(buttons))
            .catch((err) => {
                console.log(err.message);
            });

        return posts;
    }

    public async add(id:number): Promise<any> {
        let posts;
        let setPosts = (data: any) => {
            posts = data;
        }
        await fetch(this.basePath + `/api/button/${id}`, {method: "post"})
            .then((response) => response.json())
            .then((buttons) => setPosts(buttons))
            .catch((err) => {
                console.log(err.message);
            });

        return posts;
    }
}
export default ApiCalls;


