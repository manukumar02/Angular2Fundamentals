import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import {ActivatedRoute } from '@angular/router'

@Component({    
    template: `
        <div>
            <h1>Upcoming Angular2 Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" #thumbnail [event]="event"></event-thumbnail>
                </div>
            </div> 
            <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me Foo</button>
        </div>
    `
})

export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
        //this.events = this.eventService.getEvents();
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
        // this.eventService.getEvents().subscribe(events => {
        //     this.events = events
        // })
        //this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastr.error(eventName);
    }
    // handleEventClicked(data) {
    //     console.log('Recieved ', data)
    // }
}