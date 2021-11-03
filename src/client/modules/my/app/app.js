import { LightningElement, api } from 'lwc';


export default class App extends LightningElement {
    homePage = true;
    threeHundred = false;
    sixHundred = false;
    eightNinety = false;
    

    // I NEED TO DO A PAGE INDEX INSTEAD OF THIS HORRID SPAGHETTI


    handleClickThreeHundred(){
        if(this.homePage == true){
            this.homePage = !this.homePage;
            this.threeHundred = true;}
        else if(this.homePage == false){
            if(this.sixHundred == true){
                this.sixHundred = false;
                this.threeHundred = true;}
            else if(this.eightNinety == true){
                this.eightNinety = false;
                this.threeHundred = true;}
            else if(this.threeHundred == true){
                this.threeHundred = false;
                this.homePage = true;}
        }
    }
    handleClickSixHundred(){
        if(this.homePage == true){
            this.homePage = false;
            this.sixHundred = true;
        }else if(this.homePage == false){
            if(this.threeHundred == true){
                this.threeHundred = false;
                this.sixHundred = true;}
            else if(this.eightNinety == true){
                this.eightNinety = false;
                this.sixHundred = true;}
            else if(this.sixHundred == true){
                this.sixHundred = false;
                this.homePage = true;}
        }
    }
    handleClickEightNinety(){
        if(this.homePage == true){
            this.homePage = false;
            this.eightNinety = true;
        }else if(this.homePage == false){
            if(this.sixHundred == true){
                this.sixHundred = false;
                this.eightNinety = true;}
            else if(this.eightNinety == true){
                this.eightNinety = false;
                this.homePage = true;}
            else if(this.threeHundred == true){
                this.threeHundred = false;
                this.eightNinety = true;}
        }
    }

}