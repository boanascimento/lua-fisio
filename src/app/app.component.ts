import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public screenWidth: number;
  public screenHeight: number;
  public breakpointSM = 768;
  public showMenu = false;

  constructor() {}

  public ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  /**
   * Validates menu view type according with the screen width.
   */
  public validateMenuWidth(): boolean {
    return this.screenWidth < this.breakpointSM;
  }

  /**
   * Validates if the menu will be visible or not.
   */
  showHideMenuValidation(): boolean {
    return this.validateMenuWidth() ? this.showMenu : true;
  }


}
