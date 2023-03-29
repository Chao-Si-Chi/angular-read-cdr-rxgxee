import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
// 01. add a CanComponentDeactivate interface 
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
// 02. add a CanDeactivateGuard and implements CanDeactivate<CanComponentDeactivate>
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  // 03. implements canDeactivate
  canDeactivate(private component: CanComponentDeactivate,
                private currentRoute: ActivatedRouteSnapshot,
                private currentState: RouterStateSnapshot,
                private nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}