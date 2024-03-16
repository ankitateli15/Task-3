import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-3';
  sections: { header: string, details: string }[] = [];

  addSection(sectionHeader: string, sectionDetails: string) {
    this.sections.push({ header: sectionHeader, details: sectionDetails });
  }

}
