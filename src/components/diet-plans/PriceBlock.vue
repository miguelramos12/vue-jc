<script setup>
  import SubmitBtn from '@/components/buttons/SubmitBtn.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
        <div id="oneship-price-block" class="price-block d-flex flex-column mb-4">
          <div class="selection p-2 text-center">
            <strong>Your Selection:</strong> Pay for <span class="selection-name">{{ShipmentSelection}}</span>
          </div>
          <div class="d-flex">
            <div class="ppd-cell border border-bottom-0 border-right-0 text-center">
              <p>Price Per Day: </p>
              <p class="ppd">{{PricePerDay}}</p>
            </div>
            <div class="ppw-cell border border-bottom-0 text-center">
              <p>Price Per Week:</p>
            <p class="ppw">{{PricePerWeek}}</p>
          </div>
          </div>
        <div class="shipping-cell d-flex justify-content-between border border-bottom-0 p-2">
          <p>Shipping</p>
          <p class="shipping-price fw-700">FREE</p>
        </div>
        <div class="total-cell d-flex justify-content-between border p-2 fw-700">
          <p>Today's Price</p>
          <p class="total-prices"><span class="total-price">{{TotalPrice}}</span></p>
        </div>
      </div>

        <div class="text-center">
          <SubmitBtn
          btnText="Continue"
          btnClasses="mb-4"
          disabled
          />
          <p class="small mb-5">*Based on prior program including Recharge bars, now sold separately</p>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
  .price-block{
      border-color:  #9b9c9c;
  }
  .price-block .selection {
      background: #0875B5;
      color: var(--text-text-invert, #fff);
  }
  .price-block .ppd-cell, .price-block .ppw-cell {
      padding: 1rem .313rem;
      width: 50%;
  }
  .price-block .ppd-cell .ppd, .price-block .ppw-cell .ppw {
      font-size: 1.1875rem;
      color: var(--text-text-secondary, #0881c7);
  }
  .price-block .shipping-price {
      color: var(--text-text-secondary, #0881c7);
  }
</style>
