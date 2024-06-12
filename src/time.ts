export class Time {
    private time: Date;
 

    constructor(private timeZone : number=0) {
        this.time = new Date();
        
        if (timeZone != 0){
            this.changeTimeZone(timeZone);
        }
    }

    private changeTimeZone(timeZone : number): void {
        const utcHours = this.time.getUTCHours();
        this.time.setHours(utcHours + timeZone);
    }

    public addHour(): void {
        this.time.setHours(this.time.getHours() + 1);
    }

    public addMinute(): void {
        this.time.setMinutes(this.time.getMinutes() + 1);
    }

    public incrementSeconds(): void {
        this.time.setSeconds(this.time.getSeconds() + 1);
    }

    public getTime(): Date {
        return this.time;
    }
}
