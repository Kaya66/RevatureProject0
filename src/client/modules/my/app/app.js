import { LightningElement, api } from 'lwc';


export default class App extends LightningElement {
    homePage = true;
    threeHundred = false;
    sixHundred = false;
    eightNinety = false;
    



    // I NEED TO DO A PAGE INDEX INSTEAD OF THIS HORRID SPAGHETTI

    handleClickThreeHundred(){
        this.homePage = !this.homePage;
        this.threeHundred = !this.threeHundred;
        if(this.sixHundred == true){
            this.sixHundred = !this.sixHundred;
        }
        if(this.eightNinety == true){
            this.eightNinety = !this.eightNinety;
        }
    }
    handleClickSixHundred(){
        this.homePage = !this.homePage;
        this.sixHundred = !this.sixHundred;
        if(this.threeHundred == true){
            this.threeHundred = !this.threeHundred;
        }
        if (this.eightNinety == true){
            this.eightNinety = !this.eightNinety;
        }
    }
    handleClickEightNinety(){
        this.homePage = !this.homePage;
        this.eightNinety = !this.eightNinety;
        if(this.threeHundred == true){
            this.threeHundred = !this.threeHundred;
        }
        if(this.sixHundred == true){
            this.sixHundred = !this.sixHundred;
        }
    }


}
