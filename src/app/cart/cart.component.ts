import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    debugger;
    this.items = this.cartService.clearCart();
    console.warn('your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
