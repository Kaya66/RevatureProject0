import { LightningElement, api } from 'lwc';


export default class headFoot extends LightningElement {
    
    handleClickThreeHundred(){
        let event = new CustomEvent("buttonclick");
        this.dispatchEvent(event)
    }
    handleClickSixHundred(){
        let event = new CustomEvent("buttonclick2");
        this.dispatchEvent(event)
    }
    handleClickEightNinety(){
        let event = new CustomEvent("buttonclick3");
        this.dispatchEvent(event)
    }
}