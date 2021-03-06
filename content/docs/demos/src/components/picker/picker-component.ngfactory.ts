/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './picker-component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../config/config';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import12 from '@angular/core/src/zone/ng_zone';
import * as import13 from '../../util/haptic';
import * as import14 from '../../util/dom-controller';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from '../../navigation/view-controller';
import * as import24 from '../../gestures/gesture-controller';
import * as import25 from '../../navigation/nav-params';
import * as import26 from '../backdrop/backdrop.ngfactory';
import * as import27 from '../backdrop/backdrop';
import * as import28 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import29 from '../button/button';
import * as import30 from '../button/button.ngfactory';
import * as import31 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import32 from '@angular/common/src/directives/ng_class';
export class Wrapper_PickerColumnCmp {
  /*private*/ _eventHandler:Function;
  context:import0.PickerColumnCmp;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any) {
    this._changed = false;
    this.context = new import0.PickerColumnCmp(p0,p1,p2,p3,p4,p5);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_col(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.col = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = this.context.col.columnWidth;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementStyle(el,'max-width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_1) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = (this.context.col.align == 'left');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      view.renderer.setElementClass(el,'picker-opts-left',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = (this.context.col.align == 'right');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      view.renderer.setElementClass(el,'picker-opts-right',currVal_3);
      this._expr_3 = currVal_3;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionChange.subscribe(_eventHandler.bind(view,'ionChange'))); }
  }
}
export class Wrapper_PickerCmp {
  /*private*/ _eventHandler:Function;
  context:import0.PickerCmp;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any) {
    this._changed = false;
    this.context = new import0.PickerCmp(p0,p1,p2,p3,p4,p5);
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'body:keyup')) {
      const pd_sub_0:any = ((<any>this.context._keyUp($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PickerColumnCmp_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_PickerColumnCmp_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PickerColumnCmp>;
  _PickerColumnCmp_0_3:Wrapper_PickerColumnCmp;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PickerColumnCmp_Host0,renderType_PickerColumnCmp_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'div',new import3.InlineArray2(2,'class','picker-col'),rootSelector,(null as any));
    this.compView_0 = new View_PickerColumnCmp0(this.viewUtils,this,0,this._el_0);
    this._PickerColumnCmp_0_3 = new Wrapper_PickerColumnCmp(this.injectorGet(import9.Config,this.parentIndex),new import10.ElementRef(this._el_0),this.injectorGet(import11.DomSanitizer,this.parentIndex),this.injectorGet(import12.NgZone,this.parentIndex),this.injectorGet(import13.Haptic,this.parentIndex),this.injectorGet(import14.DomController,this.parentIndex));
    this.compView_0.create(this._PickerColumnCmp_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PickerColumnCmp_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PickerColumnCmp) && (0 === requestNodeIndex))) { return this._PickerColumnCmp_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PickerColumnCmp_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._PickerColumnCmp_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._PickerColumnCmp_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PickerColumnCmp_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PickerColumnCmpNgFactory:import8.ComponentFactory<import0.PickerColumnCmp> = new import8.ComponentFactory<import0.PickerColumnCmp>('.picker-col',View_PickerColumnCmp_Host0,import0.PickerColumnCmp);
const styles_PickerColumnCmp:any[] = ([] as any[]);
var renderType_PickerColumnCmp:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,styles_PickerColumnCmp,{});
export class View_PickerColumnCmp0 extends import2.AppView<import0.PickerColumnCmp> {
  _viewQuery_colEle_0:import15.QueryList<any>;
  _anchor_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import17.Wrapper_NgIf;
  _el_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import16.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import18.Wrapper_NgFor;
  _anchor_3:any;
  /*private*/ _vc_3:import16.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import17.Wrapper_NgIf;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PickerColumnCmp0,renderType_PickerColumnCmp,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_colEle_0 = new import15.QueryList<any>();
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import19.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import17.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','picker-opts'),(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_2 = new import16.ViewContainer(2,1,this,this._anchor_2);
    this._TemplateRef_2_5 = new import19.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import18.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import20.IterableDiffers,this.parentIndex),this.ref);
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_3 = new import16.ViewContainer(3,(null as any),this,this._anchor_3);
    this._TemplateRef_3_5 = new import19.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import17.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._viewQuery_colEle_0.reset([new import10.ElementRef(this._el_1)]);
    this.context.colEle = this._viewQuery_colEle_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._el_1,
      this._anchor_2,
      this._anchor_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import21.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    if (((token === import19.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import22.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import19.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import21.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.col.prefix;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    const currVal_2_0_0:any = this.context.col.options;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_3_0_0:any = this.context.col.suffix;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    const currVal_14:any = this.context.col.optionsWidth;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_1,'max-width',((this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this._vc_2.destroyNestedViews();
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_PickerColumnCmp1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    if ((nodeIndex == 2)) { return new View_PickerColumnCmp2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 3)) { return new View_PickerColumnCmp3(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}
class View_PickerColumnCmp1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PickerColumnCmp1,renderType_PickerColumnCmp,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','picker-prefix'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.parentView.context.col.prefixWidth;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementStyle(this._el_0,'width',((this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_2) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_2).toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import3.inlineInterpolate(1,'',this.parentView.context.col.prefix,'');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_PickerColumnCmp2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PickerColumnCmp2,renderType_PickerColumnCmp,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'class','picker-opt','disable-activated',''),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.$implicit.disabled;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'picker-opt-disabled',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import3.inlineInterpolate(1,'',this.context.$implicit.text,'');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.optClick($event,this.context.index)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PickerColumnCmp3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PickerColumnCmp3,renderType_PickerColumnCmp,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','picker-suffix'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.parentView.context.col.suffixWidth;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementStyle(this._el_0,'width',((this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_2) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_2).toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import3.inlineInterpolate(1,'',this.parentView.context.col.suffix,'');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_PickerCmp_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_PickerCmp_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PickerCmp>;
  _PickerCmp_0_3:Wrapper_PickerCmp;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PickerCmp_Host0,renderType_PickerCmp_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-picker-cmp',new import3.InlineArray2(2,'role','dialog'),rootSelector,(null as any));
    this.compView_0 = new View_PickerCmp0(this.viewUtils,this,0,this._el_0);
    this._PickerCmp_0_3 = new Wrapper_PickerCmp(this.injectorGet(import23.ViewController,this.parentIndex),new import10.ElementRef(this._el_0),this.injectorGet(import9.Config,this.parentIndex),this.injectorGet(import24.GestureController,this.parentIndex),this.injectorGet(import25.NavParams,this.parentIndex),this.renderer);
    this.compView_0.create(this._PickerCmp_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'keyup','body'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PickerCmp_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PickerCmp) && (0 === requestNodeIndex))) { return this._PickerCmp_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PickerCmp_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PickerCmp_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._PickerCmp_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const PickerCmpNgFactory:import8.ComponentFactory<import0.PickerCmp> = new import8.ComponentFactory<import0.PickerCmp>('ion-picker-cmp',View_PickerCmp_Host0,import0.PickerCmp);
const styles_PickerCmp:any[] = ([] as any[]);
var renderType_PickerCmp:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,styles_PickerCmp,{});
export class View_PickerCmp0 extends import2.AppView<import0.PickerCmp> {
  _viewQuery_PickerColumnCmp_0:import15.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _Backdrop_1_3:import26.Wrapper_Backdrop;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import16.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import18.Wrapper_NgFor;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _vc_14:import16.ViewContainer;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import18.Wrapper_NgFor;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PickerCmp0,renderType_PickerCmp,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_PickerColumnCmp_0 = new import15.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ion-backdrop',new import3.InlineArray8(6,'disable-activated','','role','presentation','tappable',''),(null as any));
    this._Backdrop_1_3 = new import26.Wrapper_Backdrop(new import10.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','picker-wrapper'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','picker-toolbar'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_7 = new import16.ViewContainer(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import19.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import18.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import20.IterableDiffers,this.parentIndex),this.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','picker-columns'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'div',new import3.InlineArray2(2,'class','picker-above-highlight'),(null as any));
    this._text_13 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._vc_14 = new import16.ViewContainer(14,10,this,this._anchor_14);
    this._TemplateRef_14_5 = new import19.TemplateRef_(this,14,this._anchor_14);
    this._NgFor_14_6 = new import18.Wrapper_NgFor(this._vc_14.vcRef,this._TemplateRef_14_5,this.parentView.injectorGet(import20.IterableDiffers,this.parentIndex),this.ref);
    this._text_15 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_10,'div',new import3.InlineArray2(2,'class','picker-below-highlight'),(null as any));
    this._text_17 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.Backdrop) && (1 === requestNodeIndex))) { return this._Backdrop_1_3.context; }
    if (((token === import19.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import22.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import19.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import22.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Backdrop_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_7_0_0:any = this.context.d.buttons;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_14_0_0:any = this.context.d.columns;
    this._NgFor_14_6.check_ngForOf(currVal_14_0_0,throwOnChange,false);
    this._NgFor_14_6.ngDoCheck(this,this._anchor_14,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_14.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) { if (this._viewQuery_PickerColumnCmp_0.dirty) {
        this._viewQuery_PickerColumnCmp_0.reset([this._vc_14.mapNestedViews(View_PickerCmp2,(nestedView:View_PickerCmp2):any => {
          return [nestedView._PickerColumnCmp_0_3.context];
      })]);
      this.context._cols = this._viewQuery_PickerColumnCmp_0;
      this._viewQuery_PickerColumnCmp_0.notifyOnChanges();
    } }
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_14.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_PickerCmp1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 14)) { return new View_PickerCmp2(this.viewUtils,this,14,this._anchor_14,this._vc_14); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.bdClick()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PickerCmp1 extends import2.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import28.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import29.Button>;
  _NgClass_2_3:import28.Wrapper_NgClass;
  _Button_2_4:import30.Wrapper_Button;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PickerCmp1,renderType_PickerCmp,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_9 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','picker-toolbar-button'),(null as any));
    this._NgClass_0_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import20.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import31.KeyValueDiffers,this.parentView.parentIndex),new import10.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'button',new import3.InlineArray8(6,'class','picker-button','clear','','ion-button',''),(null as any));
    this.compView_2 = new import30.View_Button0(this.viewUtils,this,2,this._el_2);
    this._NgClass_2_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import20.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import31.KeyValueDiffers,this.parentView.parentIndex),new import10.ElementRef(this._el_2),this.renderer);
    this._Button_2_4 = new import30.Wrapper_Button('',this.parentView.parentView.injectorGet(import9.Config,this.parentView.parentIndex),new import10.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText((null as any),'',(null as any));
    this.compView_2.create(this._Button_2_4.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgClass_2_3.context; }
    if (((token === import29.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Button_2_4.context; }
    if (((token === import32.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'picker-toolbar-button';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit.cssRole;
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = 'picker-button';
    this._NgClass_2_3.check_klass(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.context.$implicit.cssClass;
    this._NgClass_2_3.check_ngClass(currVal_2_0_1,throwOnChange,false);
    this._NgClass_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_1_0:any = '';
    this._Button_2_4.check_clear(currVal_2_1_0,throwOnChange,false);
    if (this._Button_2_4.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Button_2_4.context.ngAfterContentInit(); } }
    const currVal_9:any = import3.inlineInterpolate(1,'\n            ',this.context.$implicit.text,'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_3,currVal_9);
      this._expr_9 = currVal_9;
    }
    this.compView_2.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 2) && (ngContentIndex == 0))) { cb(this._text_3,ctx); }
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.btnClick(this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PickerCmp2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PickerColumnCmp>;
  _PickerColumnCmp_0_3:Wrapper_PickerColumnCmp;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PickerCmp2,renderType_PickerCmp,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','picker-col'),(null as any));
    this.compView_0 = new View_PickerColumnCmp0(this.viewUtils,this,0,this._el_0);
    this._PickerColumnCmp_0_3 = new Wrapper_PickerColumnCmp(this.parentView.parentView.injectorGet(import9.Config,this.parentView.parentIndex),new import10.ElementRef(this._el_0),this.parentView.parentView.injectorGet(import11.DomSanitizer,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import12.NgZone,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import13.Haptic,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.DomController,this.parentView.parentIndex));
    this.compView_0.create(this._PickerColumnCmp_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'ionChange',(null as any)),this.eventHandler(this.handleEvent_0));
    this._PickerColumnCmp_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PickerColumnCmp) && (0 === requestNodeIndex))) { return this._PickerColumnCmp_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._PickerColumnCmp_0_3.check_col(currVal_0_0_0,throwOnChange,false);
    this._PickerColumnCmp_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._PickerColumnCmp_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._PickerColumnCmp_0_3.context.ngAfterViewInit(); } }
  }
  dirtyParentQueriesInternal():void {
    (<View_PickerCmp0>this.parentView)._viewQuery_PickerColumnCmp_0.setDirty();
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PickerColumnCmp_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'ionChange')) {
      const pd_sub_0:any = ((<any>this.parentView.context._colChange($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}