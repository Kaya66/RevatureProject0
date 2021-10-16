import { LightningElement, track } from 'lwc';
//import { history } from 'my-originHistory';


export default class App extends LightningElement {
    
    @track parentValue="Second Value";

    welcomeScreen = true;
    handleClick(){
        this.welcomeScreen = !this.welcomeScreen;
    }
}
