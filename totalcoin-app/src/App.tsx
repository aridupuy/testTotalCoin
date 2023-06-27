import React from 'react';
import './App.css';
import ApiCalls from "./services/ApiCalls";
import { createRoot } from 'react-dom/client';
import {IoRemoveCircleOutline} from "react-icons/io5";
import {Button} from "./model/button";
import apiCalls from "./services/ApiCalls";



function App() {

    let id = 1;
    let myArrayElements: any[] = [];
    let root: any;


    const element = <>
        <div className="App">
            <div className="row">
                <h3>App test TotalCoin</h3>
            </div>
            <div className="row">
                <div id="contenedor">
                    {myArrayElements.map(data => {
                        return (data)
                    })}
                </div>
            </div>
            <div className="row mt-3">
                <input
                    type="button"
                    className="button add"
                    name={"prefijo_" + id}
                    value="Add one"
                    onClick={addButton}
                />
            </div>
        </div>
    </>;
    renderButtons();
    return element;

    async function addButton() {
        let api: ApiCalls = new ApiCalls();
        let button: Button = await api.createButton();
        root = null
        singletonRoot();
        await renderButton(button!, true);
    }

    function renderButtons(): void {
        getButtons().then((data) => {

            if (data) {
                data.map(button => {
                    renderButton(button, true);
                })
            }
        })
    }

    async function getButtons(): Promise<any[]> {
        let api: ApiCalls = new ApiCalls();
        let buttons: Promise<any[]> = api.getAllButtons();
        return await buttons;
    }

    function renderButton(button: Button | null, add?: boolean) {
        singletonRoot()
        if (add) {
            let view = createElement(button!);
            myArrayElements.push(view);
        }
        root.render(myArrayElements);
    }

    function deleteButton(id: number) {
        let apiCalls = new ApiCalls();
        apiCalls.deleteButton(id);
        myArrayElements = myArrayElements.filter((element) => {
            return element.props.children[0].props.id != `prefijo_${id}`;
        })
        renderButton(null, false);
    }

    async function inputOnclickHandler(id: number) {
        let apiCalls: ApiCalls = new ApiCalls();
        let button: Button = await apiCalls.add(id);
        myArrayElements = myArrayElements.map(element => {
            if (element.props.children[0].props.id == `prefijo_${id}`) {
                return createElement(button);
            }
            return element;
        })
        renderButton(null, false);
    }

    function singletonRoot(): void {
        if (!root)
            root = createRoot(
                document.getElementById("contenedor")!
            );
    }

    function createElement(button: Button): any{
        return (
            <div className="row mt-3" key={`div${button.id}`}>
                <input
                    type="button"
                    className="button"
                    id={"prefijo_" + button.id}
                    key={button.id}
                    value={"id: " + button.id + "  count: " + button.count}
                    onClick={() => inputOnclickHandler(button.id)}
                />
                <div onClick={() => deleteButton(button.id)} key={`delete ${button.id}`}>
                    <IoRemoveCircleOutline/>
                </div>
            </div>
        );
    }
}
export default App;
