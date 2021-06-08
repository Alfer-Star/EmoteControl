import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubtitleService } from '../services/subtitle.service';
import { MoviePageRoutingModule } from './movie-routing.module';
import { MoviePage } from './movie.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage],
  providers: [SubtitleService]
})
export class MoviePageModule {}
