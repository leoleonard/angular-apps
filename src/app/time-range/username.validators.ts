import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {

  static containNoSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0 ) {
      return { containNoSpace : true };
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    if (control.value as string === 'damian') {
      return {shouldBeUnique: true };
    }
    return null;
  }

}
