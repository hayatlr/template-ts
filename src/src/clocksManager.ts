import { Watch } from './watch';

export class ClocksManager {
    private watches: Watch[] = [];

    constructor(private rootElement: HTMLElement) {
        this.initializeClocks();
    }

    private initializeClocks(): void {
        const clockElements = this.rootElement.querySelectorAll('.circle');
        clockElements.forEach(clockElement => {
            this.createWatch(clockElement); 
        });
    }

    private createWatch(clockElement: Element, timeZone: number=0): void {
        const timeElement = clockElement.querySelector('.time') as HTMLElement;
        const modeButton = clockElement.querySelector('.mode') as HTMLElement;
        const increaseButton = clockElement.querySelector('.increase') as HTMLElement;
        const lightButton = clockElement.querySelector('.light') as HTMLElement;
        const resetButton = clockElement.querySelector('.reset') as HTMLElement;
        const toggleFormatButton = clockElement.querySelector('.toggle-format') as HTMLElement;
        const timeZoneContainer =clockElement.querySelector('.time-zone') as HTMLElement;

        if (timeElement && modeButton && increaseButton && lightButton && resetButton && toggleFormatButton && timeZoneContainer) {
            const watch = new Watch(timeElement, modeButton, increaseButton, lightButton, resetButton, toggleFormatButton, timeZoneContainer, timeZone);
            this.watches.push(watch);
        } else {
            console.error('One or more required elements were not found in a clock.');
        }
    }

    public addClock(timeZone: number): void { 
        const clockElement = document.createElement('div');
        clockElement.classList.add('circle');
        clockElement.innerHTML = `
            <div class="watch">
                <div class="time-zone"></div> 
                <div class="screen">
                    <div class="time">00:00<span class="seconds">00</span></div>
                    <div class="button mode">mode</div>
                    <div class="button increase">increase</div>
                    <div class="button light">light</div>
                    <div class="button reset">reset</div>
                    <div class="button toggle-format"></div>
                </div>
            </div>
        `;
        this.rootElement.appendChild(clockElement);
        this.createWatch(clockElement, timeZone);
    }
}
