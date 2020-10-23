import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translateService: TranslateService) { }

  public ngOnInit(): void {
    this.onResize();
    this.initTranslate();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }


  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translateService.setDefaultLang('pt-br');
    const browserLang = this.translateService.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translateService.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translateService.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translateService.use('zh-cmn-Hant');
        }
      } else {
        this.translateService.use(this.translateService.getBrowserLang());
      }
    } else {
      this.translateService.use('pt-br'); // Set your language here
    }
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
