import { LightningElement, api } from 'lwc';

export default class eightNinety extends LightningElement {
    isSelected = false;
    handleClick(){
        this.isSelected = !this.isSelected;
    }


    @api
    eightNinetySalesPitch="The 890Jump is the pride of Origin Jumpworks. Currently being the biggest ship Origin can produce, it is the gold standard in luxury traveling through the cosmos with no equal.";
    eightNinetyContactInfo = "To Get an 890Jump of your own, please go to the RSI website or call 555-555-5555 now!"

} 