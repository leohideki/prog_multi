import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MovieProvider
  ]
})
export class HomePage {
  public lista_filmes = new Array<any>();
  public aux = new Array<any>();
  constructor(public navCtrl: NavController,
    private movieProvider: MovieProvider) {

  }

  ionViewDidLoad() {
    for (var page = 1; page <= 5; page++) {
      this.movieProvider.getPopularMoviesPages(page).subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body); 
          this.aux = objeto_retorno.results;
          for(var i = 0; i < this.aux.length; i++){
            this.lista_filmes.push(this.aux[i]);
          }
          
          console.log(this.lista_filmes.concat); 
          console.log(objeto_retorno);
        }, error => {
          console.log(error);
        }
      )
    }
  }
}
