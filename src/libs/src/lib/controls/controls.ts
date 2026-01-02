import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-controls',
  imports: [],
  templateUrl: './controls.html',
  styleUrl: './controls.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Controls {}
