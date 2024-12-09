import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RoiGraphComponent } from '../roi-graph/roi-graph.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-settings-wrapper',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatIconModule,RoiGraphComponent,MatToolbarModule],
  templateUrl: './settings-wrapper.component.html',
  styleUrl: './settings-wrapper.component.css'
})
export class SettingsWrapperComponent {
  npaValue = '7%';
  roiValue = '8%';
  pcrValue = '6%';
  securedValue = '41%';
  mfiValue = '40%';
  infoVisible = false;
  onBoxClick(view: string): void {
  }

  toggleInfo(view: string): void {
    this.infoVisible = !this.infoVisible
  }
}
