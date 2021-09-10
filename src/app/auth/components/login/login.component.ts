import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';
import { FileComponent } from '../shared/file/file.component';
import { AuthjwtService } from '../../services/authjwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  names:string[]=["email","password"];
  error:boolean=false;
  
  constructor(private loginService:LoginService,private authjwtService:AuthjwtService,private router:Router) { }

  ngOnInit(): void {
  }

  @ViewChildren(FileComponent) hijos!: QueryList<FileComponent>;

  public Login():void{

    let email=this.hijos.toArray()[0].modelInput;
    let password=this.hijos.toArray()[1].modelInput;
      
    let milogin:Login={
      email:email,
      password:password
    }
    
    this.loginService.Login(milogin).subscribe(data=>
      this.authjwtService.Loginn(data.access_token)
      );
      void this.router.navigateByUrl("/peliculas");
  }

}
