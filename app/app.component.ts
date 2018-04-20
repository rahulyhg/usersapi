import { Component } from '@angular/core';

// Libreria para establecer connexion con el API.
import { HttpClient } from '@angular/common/http';

// Interface para clasificar los datos porporcionados por API.
import { Post } from './post';

// Librearia para acceder a los formato Json.
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    // Obtiene informacion desde el API.
    this.posts = this.http.get(this.ROOT_URL + '/users')    
  }

}
