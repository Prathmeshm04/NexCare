import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NexCareComponent } from './nex-care/nex-care.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VisionComponent } from './vision/vision.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HistoryFormComponent } from './history-form/history-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NexCareComponent,FeaturesComponent,TestimonialsComponent,VisionComponent,AboutusComponent,FooterComponent,LoginComponent,SignupComponent,RouterLinkActive,RouterOutlet,CommonModule,FormsModule,RouterLink,HomeComponent,HistoryFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NexCare';
}
