import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  systemTemplate: Boolean = true;

  constructor(private cdRef : ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
      this.cdRef.detectChanges();
  }
}
