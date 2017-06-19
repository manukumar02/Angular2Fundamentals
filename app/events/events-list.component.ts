import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular2 Events</h1>
            <hr> 
            <event-thumbnail [event]="event1"></event-thumbnail>       
        </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: new Date(),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1507 DT',
            city: 'Bangalore',
            country: 'India'
        }
    }
}