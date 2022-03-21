import { Component, Input  } from '@angular/core'
// import { EventEmitter } from 'protractor'

@Component({
    selector:'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: R{{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
    .pad-left {margin-left:10px};
    .well div {color: #bbb;}
    `]    
    
})

export class EventThumbnailComponent {
    @Input() event: any
   

}