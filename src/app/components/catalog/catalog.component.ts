import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
    selector: 'catalog',
    standalone: true,
    templateUrl: './catalog.component.html',
    imports: [ProductCardComponent]
})
export class CatalogComponent {
  @Input() products!: Product[];
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
  }
}
