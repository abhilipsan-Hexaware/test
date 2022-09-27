import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { DocumentService } from "../document.service";
import { AddDocumentComponent } from "./add-document.component";

describe("AddDocumentComponent", () => {
  let mockrouter: any;
  let mockDocumentService: any;
  let fixture: ComponentFixture<AddDocumentComponent>;
  let component: AddDocumentComponent;

  beforeEach(() => {
    mockDocumentService = jasmine.createSpyObj(["addDocument"]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddDocumentComponent],
      providers: [
        FormBuilder,
        {
          provide: DocumentService,
          useValue: mockDocumentService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddDocumentComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockDocumentService.addDocument.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should add Document and navigate to list Document", () => {
      component.form.setValue({
        Name: "Name",
        FileType: "FileType",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-document/"]);
    });
  });
});
