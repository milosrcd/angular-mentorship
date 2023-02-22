export class ApiResponse<T>{
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number

  constructor(items: T[], totalCount: number, page: number, pageSize: number){
    this.items = items;
    this.totalCount = totalCount;
    this.page = page;
    this.pageSize = pageSize;
  }
}
