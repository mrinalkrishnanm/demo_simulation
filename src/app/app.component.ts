import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';  
import { MatIconModule } from '@angular/material/icon';
import { SimulationWrapperComponent } from './components/simulation/simulation-wrapper/simulation-wrapper.component';
import { SettingsWrapperComponent } from './components/settings/settings-wrapper/settings-wrapper.component';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HeaderComponent,MatSidenavModule,MatToolbarModule,
    MatListModule,MatIconModule,SimulationWrapperComponent,SettingsWrapperComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_simulation';
  currentView: string = 'settings'; // Default view

  switchView(view: string): void {
    this.currentView = view;
  }
}
