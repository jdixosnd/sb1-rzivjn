import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-package-header',
  templateUrl: './package-header.component.html',
  styleUrls: ['./package-header.component.css']
})
export class PackageHeaderComponent {
  @Input() title!: string;
  @Input() duration!: string;
  @Input() price!: string;
}