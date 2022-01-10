import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tvshow } from '../../models/tvshow.model';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-tvshow-form',
  templateUrl: './tvshow-form.component.html',
  styleUrls: ['./tvshow-form.component.css'],
})
export class TvshowFormComponent implements OnInit {
  tvshow!: Tvshow;
  form!: FormGroup;

  // form to emit
  @Output() formSubmitted: EventEmitter<Tvshow>;

  // label of the button
  @Input() buttonLabel!: string;
  // in case of editing, passing the Tvshow object to be modified
  @Input() tvshowToEdit!: Tvshow;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Tvshow>();
  }

  /**
   * Initialization tasks
   */
  ngOnInit(): void {
    // initialization of the form
    this.initForm();
  }

  /**
   * Initialization of the form
   */
  private initForm(): void {
    // create a new Tvshow in case of adding a new one, or take the Tvshow passed in case of editing one
    this.tvshow = this.tvshowToEdit
      ? this.tvshowToEdit
      : new Tvshow(0, '', new Date(), 1, '', 'https://fakeimg.pl/600x900/', '');

    // initialization of the form
    this.form = this.fb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      release: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      nbSeasons: [null, [Validators.required, Validators.min(1)]],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(500),
        ],
      ],
      urlImg: [null],
      review: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  /**
   * On form submission, check if it's valid and emit it
   */
  onSubmitForm() {
    if (this.form.valid) {
      // set a fake img src if empty
      if (this.tvshow.urlImg == '') {
        this.tvshow.urlImg = 'https://fakeimg.pl/600x900/';
      }
      // emits the event
      this.formSubmitted.emit(this.tvshow);
    }
  }

  /**
   * Function called when the date changes to parse the string to an object Date and update tvshow.release
   * @param dateReleaseString : String
   */
  onChangeDateRelease(dateReleaseString: string) {
    this.tvshow.release = new Date(Date.parse(dateReleaseString));
  }
}
