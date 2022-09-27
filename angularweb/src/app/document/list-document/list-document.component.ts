import { Component, ViewChild, OnInit } from "@angular/core";
import { DocumentService } from "../document.service";
import { Document } from "../document";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-document",
  templateUrl: "./list-document.component.html",
  styleUrls: ["./list-document.component.css"],
})
export class ListDocumentComponent implements OnInit {
  data: Document[] = [];
  dataSource = new MatTableDataSource<Document>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ["Name", "FileType", "action"];

  constructor(public service: DocumentService) {}

  ngOnInit(): void {
    this.service.getDocument().subscribe((data: Document[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<Document>(this.data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteDocument(id).subscribe();
  }
}
