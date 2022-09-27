import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { Document } from "../document";
import { DocumentService } from "../document.service";
import { EditDocumentComponent } from "./edit-document.component";

describe("EditDocumentComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: Document;
  let mockDocumentService: any;
  let component: EditDocumentComponent;
  let fixture: ComponentFixture<EditDocumentComponent>;

  beforeEach(() => {
    mockdata = {
      Name: "Name",
      FileType: "FileType",
    };

    mockDocumentService = jasmine.createSpyObj([
      "getDocumentById",
      "editDocument",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditDocumentComponent],
      providers: [
        FormBuilder,
        { provide: DocumentService, useValue: mockDocumentService },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditDocumentComponent);
    component = fixture.componentInstance;
  });

  it("should get the Document by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockDocumentService.getDocumentById.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockDocumentService.getDocumentById.and.returnValue(of(mockdata));
      mockDocumentService.editDocument.and.returnValue(of(true));
      fixture.detectChanges();
    });

    it("should edit the Document by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      component.form.setValue({
        Name: "Name",
        FileType: "FileType",
      });
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith(["/list-document/"]);
    });
  });
});
