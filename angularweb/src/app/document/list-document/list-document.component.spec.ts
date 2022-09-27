import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { DocumentService } from "../document.service";
import { ListDocumentComponent } from "./list-document.component";
import { Document } from "../document";

describe("ListDocumentComponent", () => {
  let mockpaginator: any;
  let mockdata: Document[] = [];
  let mockDocumentService: any;
  let fixture: ComponentFixture<ListDocumentComponent>;
  let component: ListDocumentComponent;

  beforeEach(() => {
    mockdata = [
      {
        Name: "Name",
        FileType: "FileType",
      },
    ];

    mockDocumentService = jasmine.createSpyObj([
      "getDocument",
      "deleteDocument",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListDocumentComponent],
      providers: [
        {
          provide: DocumentService,
          useValue: mockDocumentService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListDocumentComponent);
    component = fixture.componentInstance;
  });

  it("should get all the Documents", async () => {
    mockDocumentService.getDocument.and.returnValue(of(mockdata));
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockDocumentService.deleteDocument.and.returnValue(of(true));
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the Document by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
