import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ThemeService} from "@services/theme.service";
import {ObservableDestroy} from "@classes/observable-destroy/observable-destroy";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    RouterLink
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
  private _buttons = document.getElementsByName('button-group');
  private _themeService: ThemeService = inject(ThemeService);

  public theme: WritableSignal<string> = signal('');
  public time: WritableSignal<string> = signal('');

  private _setTime(): void {
    const hours: number = new Date().getHours();
    const minutes: number = new Date().getMinutes();
    const seconds: number = new Date().getSeconds();

    this.time.set(
      (hours < 10 ? "0" + hours.toString() : hours.toString()) + " : " +
      (minutes < 10 ? "0" + minutes.toString() : minutes.toString()) + " : " +
      (seconds < 10 ? "0" + seconds.toString() : seconds.toString())
    );
  }

  public onSelected(id: string): void {
    this._buttons.forEach((button: HTMLElement): void => {
      button?.removeAttribute('class');
    });

    const element: HTMLElement | null = document.getElementById(id);
    element?.setAttribute('class', 'selected');
  }

  ngOnInit(): void {
    this._themeService.theme$
      .pipe(ObservableDestroy.unregisterFn())
      .subscribe({
        next: (theme: string): void => {
          this.theme.set(theme);
        }
      });

    setInterval((): void => {
      this._setTime();
    }, 1000);
  }
}
