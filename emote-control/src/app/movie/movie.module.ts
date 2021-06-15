import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DescSubtitlesService } from '../services/desc-subtitles.service';
import { SubtitleService } from '../services/subtitle.service';
import { MoviePageRoutingModule } from './movie-routing.module';
import { MoviePage } from './movie.page';
import { CongratModalComponent } from './congrat-modal/congrat-modal.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage, CongratModalComponent],
  providers: [SubtitleService, DescSubtitlesService]
})
export class MoviePageModule {}
