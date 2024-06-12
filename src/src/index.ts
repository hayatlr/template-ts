import './style.css';
import { ClocksManager } from './clocksManager';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const clocksContainer = document.querySelector('.clocks') as HTMLElement;
    const addClockButton = document.getElementById('add-clock-button') as HTMLButtonElement;
    const timezoneSelector = document.getElementById('timezone-selector') as HTMLSelectElement;
    
    
    timezoneSelector.innerHTML = ''; // Clear existing options to avoid duplicates

    // Create a for loop to generate options for the timezone selector
    for (let i = -11; i <= 12; i++) {
        
        const option = document.createElement('option');
        
        option.value = i.toString();
        if (i<0)
        option.textContent = `GMT${i}`;
        else 
        option.textContent = `GMT+${i}`;
        // Append the new option to the select element
        timezoneSelector.appendChild(option);
    }

    // Add event listener to the button to demonstrate adding a clock (or any other functionality)
    const addButton = document.getElementById('add-clock-button') as HTMLButtonElement;


    if (!clocksContainer || !addClockButton || !timezoneSelector) {
        console.error('Clocks container, add clock button or timezone selector element was not found.');
        return;
    }

    // Check if ClocksManager instance already exists to prevent multiple initializations
    if (!(window as any).clocksManagerInitialized) {
        const clocksManager = new ClocksManager(clocksContainer);

        addClockButton.addEventListener('click', () => {
            console.log('Add Clock button clicked');
            const selectedTimeZone = parseInt(timezoneSelector.value);
            clocksManager.addClock(selectedTimeZone);
        });

        // Set a flag to indicate that the ClocksManager has been initialized
        (window as any).clocksManagerInitialized = true;
    } else {
        console.log('ClocksManager already initialized');}


});
