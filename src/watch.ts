import { Time } from './time';

export class Watch {
    private editMode: 'none' | 'hours' | 'minutes' = 'none';
    private time: Time;
    private isNightMode: boolean = false;
    private is24HourFormat: boolean = true;
    private timer: number | undefined;

    constructor(
        private timeElement: HTMLElement,
        private modeButton: HTMLElement,
        private increaseButton: HTMLElement,
        private lightButton: HTMLElement,
        private resetButton: HTMLElement,
        private toggleFormatButton: HTMLElement,
        private timeZoneContainer:HTMLElement,
        private timeZone: number=0
    ) {
        this.time = new Time(timeZone);
        this.modeButton.addEventListener('click', this.switchEditMode.bind(this));
        this.increaseButton.addEventListener('click', this.increaseTime.bind(this));
        this.lightButton.addEventListener('click', this.switchToLightMode.bind(this));
        this.resetButton.addEventListener('click', this.resetTime.bind(this));
        this.toggleFormatButton.addEventListener('click', this.toggleTimeFormat.bind(this));
        this.start();
    }

    private start(): void {
        this.updateClockDisplay();
        this.timer = window.setInterval(() => {
            this.time.incrementSeconds();
            this.updateClockDisplay();
        }, 1000);

        let num: number;
        if(this.timeZone==0){
            num = this.time.getTime().getHours() - this.time.getTime().getUTCHours();
        } 
        else{
             num =this.timeZone;
        }

        if (num<0){
           this.timeZoneContainer.innerHTML= 'GMT'+num;
        }
        else {
            this.timeZoneContainer.innerHTML= 'GMT+'+num;
        }
    }

    private switchEditMode(): void {
        switch (this.editMode) {
            case 'none':
                this.editMode = 'hours';
                break;
            case 'hours':
                this.editMode = 'minutes';
                break;
            case 'minutes':
                this.editMode = 'none';
                break;
        }

        console.log('Edit mode:', this.editMode);
    }

    private increaseTime(): void {
        if (this.editMode === 'hours') {
            this.time.addHour();
        } else if (this.editMode === 'minutes') {
            this.time.addMinute();
        }
        this.updateClockDisplay();
    }

    private switchToLightMode(): void {
        this.isNightMode = !this.isNightMode;
        document.body.classList.toggle('night-mode', this.isNightMode);
    }

    private resetTime(): void {
        this.time = new Time(this.timeZone); 
        this.updateClockDisplay();
    }

    private toggleTimeFormat(): void {
        this.is24HourFormat = !this.is24HourFormat;
        this.updateClockDisplay();
    }

    private updateClockDisplay(): void {
        const updatedTime = this.time.getTime();
        let hours = updatedTime.getHours();
        const minutes = updatedTime.getMinutes().toString().padStart(2, '0');
        const seconds = updatedTime.getSeconds().toString().padStart(2, '0');
        let period = '';

        if (!this.is24HourFormat) {
            period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // l'heure '0' doit être '12'
        }

        const formattedHours = hours.toString().padStart(2, '0');
        this.timeElement.innerHTML = `${formattedHours}:${minutes}<span class="seconds">${seconds}</span> <span class="ampm">${period}</span>`;
    }
}
