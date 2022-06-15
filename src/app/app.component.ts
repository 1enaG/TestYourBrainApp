import { Component } from '@angular/core';
import { faHatWizard  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  faLogo = faHatWizard; 
  OnButtonClick(){
    console.log("Button was clicked!"); // in F12 
  }
}
