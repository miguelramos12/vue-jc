<script setup>
import { ref, watch, onMounted, computed } from 'vue'

const selectedShip = ref(null)
const isMenuOpen = ref(true)

function selectShip(menu) {
  selectedShip.value = menu;
}

const stepBtnClasses = computed(() => {
  return {
    'selected-closed':
      (selectedShip.value === 'oneShip' || selectedShip.value === 'twoShip' || selectedShip.value === 'fourShip') && !isMenuOpen.value
  }
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
        <div class="select-ship-type mb-4">
          <button
            class="step-btn btn w-100 text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#selectShip"
            aria-expanded="false"
            aria-controls="selectShip"
            :class="stepBtnClasses"
          >
            <span>
              <span class="fw-700">
              <img
              src="https://www.jennycraig.com/media/jc/ratecard/check-jenny-blue.svg"
              alt="check"
              class="step-check"
              :class="{ 'd-none': selectedShip !== 'oneShip' && selectedShip !== 'twoShip' && selectedShip !== 'fourShip' }"
              > Step 2:</span> Unlock additional savings:</span>
              <i
              class="bi bi-chevron-down"
              :class="{ 'd-none': isMenuOpen }"
              ></i>
          </button>

            <div class="collapse" id="selectShip" ref="selectShipCollapse">
              <div class="card card-body rounded-0">
                <hr class="step-rule mt-0">
                <div class="wrap">
                  <div class="info-txt"><ul class="list-checked check-blue"><li class="check">Save even more on every shipment when you pay for multiple shipments today. Buy more, save more.</li> <li class="check">FREE shipping unlocked!</li> <li class="check">$30 off first shipment</li></ul></div>

                  <div class="btn-group d-flex flex-column gap-2 mb-3" role="group" aria-label="menu types">
                    <button
                    id="oneShip"
                    type="button"
                    class="btn ship-btn w-100 d-flex align-items-center gap-2-5 "
                    onclick="omni_track('CustomizeMenu')"
                    :class="[selectedShip === 'oneShip' ? 'selected' : 'unselected']"
                    @click="selectShip('oneShip')"
                    >
                    <span class="fake-radio">
                      <img
                      src="https://www.jennycraig.com/media/jc/ratecard/radio-check-blu.svg"
                      class="blue-check"
                      :class="{ 'd-none': selectedShip !== 'oneShip' }"
                      alt="checked"
                      >
                    </span>
                      <div class="d-flex flex-column align-items-start flex-sm-shrink-0">
                        <span class="btn-title">Pay for Today's Shipment</span>
                        <span class="sub-txt">2 Weeks Total</span>
                      </div>
                      <div class="d-flex flex-column align-items-end ms-auto">
                        <span class="code">$150.00/week with code JENNY4ME</span>
                        <span class="priceper"><s><span class="price">$165.00</span><span class="per">/week</span></s></span>
                      </div>
                    </button>

                    <button
                    id="twoShip"
                    type="button"
                    class="btn ship-btn w-100 d-flex align-items-center gap-2-5 "
                    onclick="omni_track('FavoritesMenu')"
                    :class="[selectedShip === 'twoShip' ? 'selected' : 'unselected']"
                    @click="selectShip('twoShip')"
                    >
                    <span class="fake-radio">
                      <img
                      src="https://www.jennycraig.com/media/jc/ratecard/radio-check-blu.svg"
                      class="blue-check"
                      :class="{ 'd-none': selectedShip !== 'twoShip' }"
                      alt="checked"
                      >
                    </span>
                      <div class="d-flex flex-column align-items-start flex-sm-shrink-0">
                        <span class="btn-title">Pay for 2 Shipments</span>
                        <span class="sub-txt">4 Weeks total</span>
                      </div>
                      <div class="d-flex flex-column align-items-end ms-auto">
                        <span class="code"> $140.00/week with code JENNY4ME</span>
                        <span class="priceper"><s><span class="price">$148.50</span><span class="per">/week</span></s></span>
                      </div>
                    </button>

                  <button
                    id="fourShip"
                    type="button"
                    class="btn ship-btn w-100 d-flex align-items-center gap-2-5 "
                    onclick="omni_track('FavoritesMenu')"
                    :class="[selectedShip === 'fourShip' ? 'selected' : 'unselected']"
                    @click="selectShip('fourShip')"
                    >
                    <span class="fake-radio">
                      <img
                      src="https://www.jennycraig.com/media/jc/ratecard/radio-check-blu.svg"
                      class="blue-check"
                      :class="{ 'd-none': selectedShip !== 'fourShip' }"
                      alt="checked"
                      >
                    </span>
                      <div class="d-flex flex-column align-items-start flex-sm-shrink-0">
                        <span class="btn-title">Pay for 4 Shipments</span>
                        <span class="sub-txt">8 Weeks total</span>
                      </div>
                      <div class="d-flex flex-column align-items-end ms-auto">
                        <span class="code"> $131.50/week with code JENNY4ME</span>
                        <span class="priceper"><s><span class="price">$135.30</span><span class="per">/week</span></s></span>
                      </div>
                    </button>

                  </div>
                  </div>

                    <div class="text-center more-info-wrap">
                      <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#menu-modal" onclick="omni_track('ChooseYourMenu:MoreInfo')" class="menu-more-info">More info</a>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.step-btn{
      padding: 0.625rem 0.625rem .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #9B9C9C;
    border-radius:0;
    background-color:#FAF7F4;
}
.step-btn[aria-expanded="false"]{
color:var(--Text-text-inactive, #7E7E7F);
}
.step-btn[aria-expanded="true"]{
border-bottom:0;
color:initial;
}
.card-body{
      background-color:#FAF7F4;
      border: 1px solid #9B9C9C;
      border-top:0;
      padding-top:0;
}

.ship-btn{
  border: 1px solid var(--border-border-primary, #9b9c9c);
  border-radius:0;
  background-color:#fff;
  padding:.5rem;
  align-self: stretch;
  min-height: 6rem
}
.fake-radio{
      background: #fff;
    border: 1px solid #ccc;
    width: 1.25rem;
        height: 1.25rem;
        border-radius:50%;
        flex-shrink: 0;
}

.sub-txt{
  font-size: 0.8125rem;
  white-space: wrap;
  text-align: left;
  line-height: 1.3;
  width:auto
}
.more-info-wrap {
    background: #ECE7E1;
    padding: .25rem 0;
}
.card-body .wrap{
padding:0 .625rem 1rem;
}
.blue-check{
  vertical-align: top;
}
.ship-btn.selected{
  border-color:#0875B5;
}
.ship-btn.selected .fake-radio{
  border-color:transparent;
}

.ship-btn.selected .blue-check{
    box-shadow: 0px 0px 5px #009cdb;
    border-radius:50%
}

.step-check{
  width:1.3rem;
  height:auto;
}

.selected-closed{
      border: 1px solid #0875B5;
    background: var(--Background-background-active, #DFEBF0);
}

.select-ship-type .step-btn span{
  width:85%;
  white-space: pre-wrap;
}
.list-checked li {

    padding: 0 0 0 1.25rem;
}
.list-checked.check-blue>li:before {
    background: url(https://www.jennycraig.com/images/jc/global/blue-check.svg) 0 0 no-repeat;
    height: 1.25rem;
    top:.25rem;
    width: 1rem;
    background-size: contain;
}
.btn-title{
  font-size:.8125rem;
  font-weight:700;
  text-align: left;
  white-space: pre-wrap;
  line-height:1.5;
  margin-bottom:.2rem;
}

.code {
    font-size: .8125rem;
    font-weight: 700;
    color: #bd357a;
    padding: 0;
    white-space: pre-wrap;
    text-align: right;
    line-height:1.2;
    width:85%;
}

.priceper{
  font-size: 1rem;
}

@media(min-width:567px){
  .sub-txt {
    width: 75%;
}
}

@media(min-width:768px){

.step-check{
  width:1.4rem;
}
}

@media(min-width:992px){
  .ship-btn{
    padding:1rem;
  }
}
</style>
