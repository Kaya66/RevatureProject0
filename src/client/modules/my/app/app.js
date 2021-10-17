import { LightningElement, api } from 'lwc';


export default class App extends LightningElement {



    homePage = false;
    threeHundred = false;
    sixHundred = false;
    eightNinety = true;
 
    handleClickThreeHundred(){
        this.homePage = !this.homePage;
        this.threeHundred = !this.threeHundred;
    }
    handleClickSixHundred(){
        this.homePage = !this.homePage;
        this.sixHundred = !this.sixHundred;
    }
    handleClickEightNinety(){
        this.homePage = !this.homePage;
        this.eightNinety = !this.eightNinety;
    }

}
