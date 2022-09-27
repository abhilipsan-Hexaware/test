import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Document } from "../document";
import { DocumentService } from "../document.service";

@Component({
  selector: "app-edit-document",
  templateUrl: "./edit-document.component.html",
  styleUrls: ["./edit-document.component.css"],
})
export class EditDocumentComponent implements OnInit {
  data!: Document;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: DocumentService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service.getDocumentById(id).subscribe((data: Document) => {
      this.data = data;
    });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      Name: new FormControl("", [Validators.required]),
      FileType: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service.editDocument(id, this.form.value).subscribe((res) => {
        this._router.navigate(["/list-document/"]);
      });
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
