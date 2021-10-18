import { LightningElement, api } from 'lwc';


export default class headFoot extends LightningElement {
    value = 'White';

    get options() {
        return [
            { label: 'White', value: 'White' },
            { label: 'Red', value: 'Red' },
            { label: 'Carbon-black', value: 'Carbon-black' },
        ];
    }


    handleChange(event) {
        this.value = event.detail.value;
    }
}
