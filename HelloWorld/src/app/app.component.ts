import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular | HelloWorld';
  text = 'My first app';

  openVideo(){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley?rel=0&autoplay=1");
  }
}
