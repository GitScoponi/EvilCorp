export interface IParametrosCard {
  DefaultSort: string;
  Filter: string;
  Group: string;
  GroupSummary: string;
  IsCountQuery: boolean;
  PaginateViaPrimaryKey: boolean;
  PreSelect: string;
  PrimaryKey: string;
  RemoteGrouping: boolean;
  RemoteSelect: boolean;
  RequireGroupCount: boolean;
  RequiteTotalCount: boolean;
  Select: string;
  Skip: number;
  Sort: string;
  StringToLower: boolean;
  Take: number;
  TotalSummary: string;
}

export class ParametrosCard implements IParametrosCard {
  public DefaultSort: string;
  Filter: string;
  Group: string;
  GroupSummary: string;
  IsCountQuery: boolean;
  PaginateViaPrimaryKey: boolean;
  PreSelect: string;
  PrimaryKey: string;
  RemoteGrouping: boolean;
  RemoteSelect: boolean;
  RequireGroupCount: boolean;
  RequiteTotalCount: boolean;
  Select: string;
  Skip: number;
  Sort: string;
  StringToLower: boolean;
  Take: number;
  TotalSummary: string;

  constructor() {
    this.DefaultSort = '';
    this.Filter = '';
    this.Group = '';
    this.GroupSummary = '';
    this.IsCountQuery = false;
    this.PaginateViaPrimaryKey = false;
    this.PreSelect = '';
    this.PrimaryKey = '';
    this.RemoteGrouping = false;
    this.RemoteSelect = false;
    this.RequireGroupCount = false;
    this.RequiteTotalCount = false;
    this.Select = '';
    this.Skip = 0;
    this.Sort = '';
    this.StringToLower = false;
    this.Take = 10;
    this.TotalSummary = '';
  }

  enviarParametrosAPI(obj?: any) {
    var qs = '';
    if (obj != null) {
      qs = Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join('&');
    }
    return (
      `DefaultSort=${this.DefaultSort}&` +
      `Filter=[${this.Filter}]&` +
      `Group=${this.Group}&` +
      `GroupSummary=${this.GroupSummary}&` +
      `IsCountQuery=${this.IsCountQuery}&` +
      `PaginateViaPrimaryKey=${this.PaginateViaPrimaryKey}&` +
      `PreSelect=${this.PreSelect}&` +
      `PrimaryKey=${this.PrimaryKey}&` +
      `RemoteGrouping=${this.RemoteGrouping}&` +
      `RemoteSelect=${this.RemoteSelect}&` +
      `RequireGroupCount=${this.RequireGroupCount}&` +
      `RequiteTotalCount=${this.RequiteTotalCount}&` +
      `Select=${this.Select}&` +
      `Skip=${this.Skip}&` +
      `Sort=${this.Sort}&` +
      `StringToLower=${this.StringToLower}&` +
      `Take=${this.Take}&` +
      `TotalSummary=${this.TotalSummary}&` +
      `Conselho=${''}&` +
      qs
    );
  }
}
