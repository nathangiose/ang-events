import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '2/5/2023',
        time: '10:00am',
        price: 899.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '2 EC',
            city: 'Cape Town',
            country: 'South Africa'
        }
    }
   
}