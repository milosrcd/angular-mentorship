import { Type } from "@angular/core";
import { Route } from "@angular/router";

export interface AdminLink {
  linkName: string;
  path: string;
  canActivate?: Type<any>[] | Route[];
}
