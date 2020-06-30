### 6. Angular
#### Directives


---


#### Directives

A Directive is a Component without a template.
Directives are mainly used to manipulate the DOM.



---


#### Different kinds of directives

**Component** - Directive with a template.
* **Attribute directives**
  * Changes the appearance or behavior of an element, component, or another directive.
  * Sits on elements like attributes - changes the properties of that element.


* **Structural directives**
  * Change the DOM layout by adding and removing DOM elements.
  * Structural Directives - Also changes the DOM around it (*ngIf, *ngFor)


---
				

#### Built in directives
				
* There are many built in directives but the most common are:
	* NgClass — adds and removes a set of CSS classes.
	* NgStyle — adds and removes a set of HTML styles.
	* NgModel — adds two-way data binding to an HTML form element.


---

<img src="/media/angular-images/angular-5/directives.png" alt="directives">


---

#### *ngIf

* Renders if a condition is true
           
```JavaScript
@Component({
	selector: 'app-if',
	template: `
		<h2 (click)="onClick()">A header</h2>
		<p *ngIf="show">Hello</p>
	`
})
export class IfComponent {

	show:boolean = true;
		
	onClick($event):void{
		this.show = !this.show;
	}
}
```



---
				

#### ngSwitch

* Depending on what fruit is a different template is rendered.
* Like a switch case.
           
```JavaScript
@Component({
	selector: 'app-switch',
	template: `
		<div [ngSwitch]="fruit">
			<orange-component *ngSwitchCase="'orange'"></orange-component>
			<apple-component *ngSwitchCase="'apple'"></some-other-component>
			<pear-component *ngSwitchCase="'pear'"></pear-component>
			<unknown-component  *ngSwitchDefault ></unknown-component>
		</div>
	`
})
export class SwitchComponent {
	fruit:string = 'pear';	
}
```


---
				
#### *ngFor

* Renders for each item.
           
```JavaScript
@Component({
	selector: 'app-bind',
	template: `
			<li *ngFor="let item of items">
				{{item}}
			</li>
	`
})

export class BindComponent {
	items: string[] = ['item1', 'item2'];
}
```


---

#### Two way data binding

* For data entry
* FormsModule required
* Data flow both ways
* [(ngModel)]


---
				
####  [(ngModel)]
           
```JavaScript
@Component({
	selector: 'app-two-way',
	template: `
		<input
			[(ngModel)]="text"
			(keyup)="onKey($event)"
		>
	`
})
export class TwoWayComponent {
	text:string;
		
	onKey($event):void{
		console.log($event.target.value);
		console.log(this.text);
	}
}
```


---

#### <a href="https://angular.io/guide/cheatsheet" target="blank">Angular Cheat sheet</a>


---

#### Example of creating your own directive