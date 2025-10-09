<template>
    <div class="cart-page">
      <h1>🛒 Your Cart</h1>
  
      <div v-if="store.cart.length === 0" class="empty-cart">
        <p>Your cart is empty.</p>
      </div>
  
      <div v-else class="cart-list">
        <div v-for="item in store.cart" :key="item.id" class="cart-item">
          <h3>{{ item.name }}</h3>
          <p>Subject: {{ item.subject }}</p>
          <p>Price: £{{ item.price }}</p>
          <p>⭐ {{ item.rating }}</p>
          <button @click="store.removeFromCart(item.id)" class="remove-btn">Remove</button>
        </div>
  
        <div class="cart-summary">
          <h3>Total: £{{ totalPrice }}</h3>
          <button class="checkout-btn" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { store } from './store'
  
  const totalPrice = computed(() => {
    return store.cart.reduce((sum, item) => sum + item.price, 0)
  })
  
  function checkout() {
    alert('Checkout successful! 🎉')
    store.clearCart()
  }
  </script>
  
  <style scoped>
  .cart-page {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cart-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .cart-item {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    background: #fff;
  }
  
  .remove-btn {
    background-color: #ef4444;
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .remove-btn:hover {
    background-color: #dc2626;
  }
  
  .cart-summary {
    margin-top: 2rem;
    text-align: right;
    font-weight: bold;
  }
  
  .checkout-btn {
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .checkout-btn:hover {
    background-color: #2563eb;
  }
  </style>
  