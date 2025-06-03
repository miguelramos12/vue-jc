<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
        <div class="select-menu-type mb-4">
          <button
            class="step-btn btn w-100 text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#selectMenu"
            aria-expanded="true"
            aria-controls="selectMenu"
            :class="stepBtnClasses"
          >
            <span>
              <span class="fw-700">
              <img
              src="https://www.jennycraig.com/media/jc/ratecard/check-jenny-blue.svg"
              alt="check"
              class="step-check"
              :class="{ 'd-none': selectedMenu !== 'custom' && selectedMenu !== 'favorites' }"
              > Step 2:</span> Unlock additional savings:</span>
              <i
              class="bi bi-chevron-down"
              :class="{ 'd-none': isMenuOpen }"
              ></i>
          </button>
            <div class="collapse show" id="selectMenu" ref="selectMenuCollapse">
              <div class="card card-body rounded-0">
                <hr class="step-rule mt-0">
                <div class="wrap">
                  <div class="info-txt"><ul class="list-checked check-blue"><li class="check">Save even more on every shipment when you pay for multiple shipments today. Buy more, save more.</li> <li class="check">FREE shipping unlocked!</li> <li class="check">$30 off first shipment</li></ul></div>
                  <div class="btn-group d-flex flex-column gap-2 mb-3" role="group" aria-label="menu types">
                    <button
                    id="custom"
                    type="button"
                    class="btn menu-btn w-100 d-flex align-items-center gap-2-5 "
                    onclick="omni_track('CustomizeMenu')"
                    :class="[selectedMenu === 'custom' ? 'selected' : 'unselected']"
                    @click="selectMenu('custom')"
                    >
                    <span class="fake-radio">
                      <img
                      src="https://www.jennycraig.com/media/jc/ratecard/radio-check-blu.svg"
                      class="blue-check"
                      :class="{ 'd-none': selectedMenu !== 'custom' }"
                      alt="checked"
                      >
                    </span>
                      <span class="d-flex flex-column align-items-start"><span class="btn-title">Customize Menu</span> <span class="sub-txt">Choose the foods you want for each meal occasion.</span></span>
                    </button>
                    <button
                    id="favorites"
                    type="button"
                    class="btn menu-btn w-100 d-flex align-items-center gap-2-5 "
                    onclick="omni_track('FavoritesMenu')"
                    :class="[selectedMenu === 'favorites' ? 'selected' : 'unselected']"
                    @click="selectMenu('favorites')"
                    >
                    <span class="fake-radio">
                      <img
                      src="https://www.jennycraig.com/media/jc/ratecard/radio-check-blu.svg"
                      class="blue-check"
                      :class="{ 'd-none': selectedMenu !== 'favorites' }"
                      alt="checked"
                      >
                    </span>
                      <span class="d-flex flex-column align-items-start"><span class="btn-title">Customer Favorites</span> <span class="sub-txt">A recommended curation of popular meals, great for first-time orders.</span></span>
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

<script setup>

</script>

<style scoped>

</style>
