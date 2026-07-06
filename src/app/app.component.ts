import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./features/landing/components/hero/hero.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { BenefitsComponent } from "./features/landing/components/benefits/benefits.component";
import { SocialProofComponent } from "./features/landing/components/social-proof/social-proof.component";
import { UvpComponent } from "./features/landing/components/uvp/uvp.component";
import { CtaComponent } from "./features/landing/components/cta/cta.component";
import { FaqComponent } from "./features/landing/components/faq/faq.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, NavbarComponent, FooterComponent, BenefitsComponent, SocialProofComponent, UvpComponent, CtaComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recircuit';
}
