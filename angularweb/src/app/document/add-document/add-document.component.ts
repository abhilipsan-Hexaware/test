import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DocumentService } from "../document.service";

@Component({
  selector: "app-add-document",
  templateUrl: "./add-document.component.html",
  styleUrls: ["./add-document.component.css"],
})
export class AddDocumentComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: DocumentService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      Name: ["", [Validators.required]],
      FileType: ["", [Validators.required]],
    });
  }

  add() {
    if (this.form.valid) {
      this.service.addDocument(this.form.value).subscribe((res) => {
        this._router.navigate(["/list-document/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
