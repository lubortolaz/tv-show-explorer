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

  @Output() formSubmitted: EventEmitter<Tvshow>;
  @Input() buttonLabel!: string;
  @Input() tvshowToEdit!: Tvshow;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Tvshow>();
  }

  ngOnInit(): void {
    // initialisation du formulaire
    this.initForm();
  }

  private initForm(): void {
    this.tvshow = this.tvshowToEdit
      ? this.tvshowToEdit
      : new Tvshow(0, '', new Date(), 1, '', 'https://fakeimg.pl/600x900/', '');

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
          Validators.maxLength(255),
        ],
      ],
      urlImg: [null],
      review: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
    });
  }

  onSubmitForm() {
    if (this.form.valid) {
      // set a fake img src if empty
      if (this.tvshow.urlImg == '') {
        this.tvshow.urlImg = 'https://fakeimg.pl/600x900/';
      }
      this.formSubmitted.emit(this.tvshow);
    }
  }

  onChangeDateRelease(dateReleaseString: string) {
    this.tvshow.release = new Date(Date.parse(dateReleaseString));
  }
}
