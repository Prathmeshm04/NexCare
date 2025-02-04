import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { NexCareComponent } from '../nex-care/nex-care.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { FeaturesComponent } from '../features/features.component';
import { visitAll } from '@angular/compiler';
import { VisionComponent } from '../vision/vision.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent,HeaderComponent,NexCareComponent,TestimonialsComponent,AboutusComponent,FeaturesComponent,VisionComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
