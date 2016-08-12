import {Component} from '@angular/core';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
@Component({
    selector: 'my-app',
     template:'<playlist [videos]="videos"></playlist>',
     directives:[PlaylistComponent]
})
export class AppComponent{
    videos:Array<Video>;

    constructor(){
        this.videos=[
            new Video(1,"Nested Components","f8qBeaGe2S4","XXXXX"),
            new Video(2,"Nested Components2","f8qBeaGe2S4","YYYYYYY")
        ];
    }
}