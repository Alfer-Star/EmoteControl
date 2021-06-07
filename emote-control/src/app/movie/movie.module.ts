import { SubtitlesComponent } from './subtitles/subtitles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import { SubtitleService } from '../services/subtitle.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage, SubtitlesComponent],
  providers: [SubtitleService]
})
export class MoviePageModule {}
