import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {themeKey} from "@constants/storage-keys";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeService} from "@services/theme.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  private _darkTheme: string = 'dark-theme';
  private _selectedTheme: string | null = localStorage.getItem(themeKey);
  private _themeService: ThemeService = inject(ThemeService);

  public theme: WritableSignal<string | null> = signal('light');

  public changeTheme(): void {
    if (this.theme() === 'light') {
      this.theme.set('dark');
      localStorage.setItem(themeKey, 'dark');
      document.body.classList.add(this._darkTheme);
      this._themeService.setTheme('dark');
    } else {
      this.theme.set('light');
      localStorage.setItem(themeKey, 'light');
      document.body.classList.remove(this._darkTheme);
      this._themeService.setTheme('light');
    }
  }

  ngOnInit(): void {
    if (!this._selectedTheme) {
      localStorage.setItem(themeKey, this.theme() as string);
    } else {
      document.body.classList[this._selectedTheme === 'dark' ? 'add' : 'remove'](this._darkTheme);
      this.theme.set(this._selectedTheme);
    }
  }
}
