import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings-wrapper',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatIconModule],
  templateUrl: './settings-wrapper.component.html',
  styleUrl: './settings-wrapper.component.css'
})
export class SettingsWrapperComponent {
  npaValue = '7%';
  roiValue = '*8';
  infoVisible = false;
  onBoxClick(view: string): void {
  }

  toggleInfo(view: string): void {
    this.infoVisible = !this.infoVisible
  }
}
