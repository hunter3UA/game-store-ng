import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageInfoDTO } from 'src/app/modules/core/common/page.info.dto';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  @Input() pageInfoDto: PageInfoDTO;
  @Input() queryParams: any;
  public pages: Array<number>;
  public current: number;
  public total: number;

  constructor() {
    this.pages = new Array<number>();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageInfoDto']) {
      this.pageInfoDto = changes['pageInfoDto'].currentValue;
      this.pages = this.getPages(
        this.pageInfoDto.currentPageNumber,
        this.pageInfoDto.totalPages
      );
      this.current = this.pageInfoDto.currentPageNumber;
      this.total = this.pageInfoDto.totalPages;
    }
    if (changes['queryParams']) {
      this.queryParams = changes['queryParams'].currentValue;
    }
  }
  private getPages(current: number, total: number): number[] {
    return [...Array(this.pageInfoDto.totalPages).keys()].map((x) => ++x);
  }

  onNext(page: number) {
    this.current = page + 1;
  }
  onPrevious() {}
}
