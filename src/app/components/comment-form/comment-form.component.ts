import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  newComment!: Comment;
  form!: FormGroup;

  @Input() idTvShow!: number;
  @Output() formSubmitted: EventEmitter<Comment>;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Comment>();
  }

  /**
   * Initialization tasks
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialization of the form
   */
  private initForm(): void {
    this.newComment = new Comment(0, new Date(), '', '', this.idTvShow);

    this.form = this.fb.group({
      content: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255),
      ]),
    });
  }

  /**
   * Submission of the form
   */
  onSubmitForm() {
    // check if the form is valid
    if (this.form.valid) {
      this.formSubmitted.emit(this.newComment);
      this.initForm();
    }
  }
}
