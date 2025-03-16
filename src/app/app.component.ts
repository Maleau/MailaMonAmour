import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { StepContainerComponent } from "./components/step-container/step-container.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, StepContainerComponent]
})
export class AppComponent {
  title = 'MailaMonAmour';
}
