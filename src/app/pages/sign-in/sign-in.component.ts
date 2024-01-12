import {Component} from '@angular/core';
import {ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {EMAIL_REGEXP} from "@constants/regexps";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  public form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl({
      value: '',
      disabled: false
    }, [Validators.required, Validators.pattern(EMAIL_REGEXP), Validators.email]),
    password: new UntypedFormControl({value: '', disabled: false}, [Validators.required])
  });

  public signIn(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
    } else {
      console.log(this.form.value);
    }
  }
}
