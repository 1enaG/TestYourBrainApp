import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { User } from '../entities/test.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  user!: User; 
  userId: number = 1; // get from somewhere
  countries: string[]  = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia",
    "Zimbabwe"];

  avatar = ''; //"https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png";  
  constructor(private imgService: ImageService,
              private service: UsersService, 
              private authService: AuthService, 
              private router: Router) 
  { 
      this.service.getUser(this.userId)
        .subscribe(response => {
          this.user = response; 
          console.log(this.user); 
        });
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout(); 
    this.router.navigate(["/login-component"]); 
  }
  OnChange(fileInput : HTMLInputElement){
    if (!fileInput.files) return; //make sure it's not null! 

    let imageFile:File = fileInput.files[0];  
    //console.log(imageFile); 
    //subscribe to an observable you get from the service!
    this.imgService.toBase64(imageFile)
      .subscribe((data)=>{
        //console.log(data); 
        this.avatar = data; 
        this.user.avatar = this.avatar; // set new avatar to later write to DB 
      }); 

  }
  onSubmit(){
    this.service.updateUser(this.user); 
  }

  //when i click "Update", I want to take the avatar picture from the field and write it 
  // to json file 
}
