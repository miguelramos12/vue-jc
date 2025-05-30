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
            <span><span class="fw-700">
              <img
              src="https://www.jennycraig.com/media/jc/ratecard/check-jenny-blue.svg"
              alt="check"
              class="step-check"
              :class="{ 'd-none': selectedMenu !== 'custom' && selectedMenu !== 'favorites' }"
              > Step 1:</span> Select menu type:</span>
              <i
              class="bi bi-chevron-down"
              :class="{ 'd-none': isMenuOpen }"
              ></i>
          </button>
          <div class="collapse show" id="selectMenu" ref="selectMenuCollapse">
            <div class="card card-body rounded-0">
              <hr class="step-rule mt-0">
              <div class="wrap">
                <p class="info-txt mb-3">Choose the meals you want for each occasion or select our curated menu of Customer Favorites.</p>
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
                      <div class="prev-menu text-center">
                        <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#prevMenu" onclick="omni_track('PreviewMenu')"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none"><g clip-path="url(#clip0_2453_6419)"><path d="M10.4037 19.7454C9.54007 19.5004 8.71319 19.1819 7.92613 18.7838C4.2113 16.9279 1.53467 13.452 1.53467 8.81839V8.68364C1.53467 8.5397 1.55611 8.40189 1.60511 8.26407C1.61429 8.22732 1.62654 8.19364 1.64492 8.15689C1.65411 8.13545 1.66636 8.10789 1.68167 8.08032C1.70004 8.03439 1.72761 7.99151 1.75823 7.94557C1.77048 7.91495 1.78886 7.88738 1.81336 7.85676C1.83479 7.81695 1.86848 7.77713 1.89911 7.73732C1.93586 7.69138 1.97567 7.64238 2.01854 7.59338" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M27.4161 8.35022C27.4529 8.46047 27.4651 8.57378 27.4651 8.68403C27.5203 13.3881 24.8191 16.9099 21.0706 18.7842C20.2835 19.1823 19.4536 19.5039 18.59 19.7458H18.5869" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.9292 18.7838L8.8112 20.5509C9.0317 20.9888 9.4237 21.3196 9.89227 21.4666C11.3531 21.9168 12.918 22.0975 14.5013 22.0975C16.0847 22.0975 17.6496 21.9198 19.1104 21.4666C19.579 21.3196 19.9741 20.9888 20.1915 20.5509L21.0735 18.7838" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M27.4161 8.34982C27.4528 8.46007 27.4651 8.57339 27.4651 8.68364C27.4651 9.40639 26.8495 10.0863 25.7654 10.6773C25.7562 10.6804 25.7531 10.6865 25.744 10.6865C23.5053 11.8931 19.3096 12.7078 14.4984 12.7078C7.3352 12.7078 1.53174 10.907 1.53174 8.68364C1.53174 8.30389 1.70018 7.94251 2.01562 7.59338" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M23.4961 8.96221L23.6614 8.81521C23.885 8.59164 24.0596 8.32827 24.179 8.04958C24.3138 7.74027 24.3811 7.40645 24.3811 7.0757C24.3811 6.44482 24.1392 5.81395 23.6614 5.3362C22.6998 4.38069 21.1441 4.38069 20.1824 5.3362L19.1718 6.49076L15.6836 10.469" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.9219 7.39496L23.447 8.92009L23.496 8.96296" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.0766 8.97452L18.0078 7.9057" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M23.8179 1.70453L22.7276 3.31847C22.4367 3.7166 22.3234 4.19741 22.3785 4.65985" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24.3384 6.61949C24.8008 6.67768 25.2816 6.56131 25.6798 6.27037L27.2937 5.18011" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24.9231 4.07465L23.6614 5.33946" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.52401 8.52475C4.30044 8.06537 4.22388 7.78056 4.40763 7.31199C4.62507 6.76381 5.17938 6.3473 5.76739 6.36568C5.31413 5.59086 5.35088 4.57411 5.88682 3.85748C5.90214 3.83911 5.91745 3.81767 5.93276 3.80236C6.48401 3.12248 7.43952 2.79479 8.29089 3.00917C9.16065 3.23273 9.86809 4.00448 9.99978 4.89261C10.1407 4.51898 10.6123 4.3628 11.0043 4.29542C11.0717 4.28623 11.1421 4.28011 11.2095 4.27398C11.5402 4.2648 11.871 4.35973 12.165 4.5098C12.6795 4.77317 13.096 5.21111 13.3563 5.72868" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5214 6.52188C15.2978 5.48981 15.4019 4.38118 15.8215 3.40424C16.2717 2.34768 17.0833 1.45649 18.0847 0.899109C18.4706 1.77499 18.7095 2.70905 18.7676 3.65231" stroke="#0881C7" stroke-width="1.225" stroke-linecap="round" stroke-linejoin="round"></path></g> <defs><clipPath id="clip0_2453_6419"><rect width="27.1553" height="22.4206" fill="white" transform="translate(0.922363 0.289673)"></rect></clipPath></defs></svg> Preview the menu</a></div></div>
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
import { ref, watch, onMounted, computed } from 'vue'

const selectedMenu = ref(null)
const selectMenuCollapse = ref(null)
const isMenuOpen = ref(true)

function selectMenu(menu) {
  selectedMenu.value = menu;
}

watch(selectedMenu, (val) => {
  if (val && selectMenuCollapse.value) {
    const collapse = window.bootstrap.Collapse.getOrCreateInstance(selectMenuCollapse.value)
    collapse.hide()
  }
})

onMounted(() => {
  if (selectMenuCollapse.value) {
    selectMenuCollapse.value.addEventListener('hide.bs.collapse', () => {
      isMenuOpen.value = false
    })
    selectMenuCollapse.value.addEventListener('show.bs.collapse', () => {
      isMenuOpen.value = true
    })
  }
})

const stepBtnClasses = computed(() => {
  return {
    'selected-closed':
      (selectedMenu.value === 'custom' || selectedMenu.value === 'favorites') && !isMenuOpen.value
  }
})

</script>






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
.step-btn[aria-expanded="true"]{
border-bottom:0;
}
.card-body{
      background-color:#FAF7F4;
      border: 1px solid #9B9C9C;
      border-top:0;
      padding-top:0;
}

.menu-btn{
  border: 1px solid var(--border-border-primary, #9b9c9c);
  border-radius:0;
  background-color:#fff;
  padding:.5rem;
  align-self: stretch;
  min-height:7rem
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
  width:50%
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
.menu-btn.selected{
  border-color:#0875B5;
}
.menu-btn.selected .fake-radio{
  border-color:transparent;
}

.menu-btn.selected .blue-check{
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






@media(max-width:767px){
#custom{
  background: url(https://www.jennycraig.com/media/jc/ratecard/12272024/custom_menu_food.webp)#fff no-repeat top right;
  background-size: contain;
}
#favorites{
  background: url(https://www.jennycraig.com/media/jc/ratecard/12272024/lava_cake.webp)#fff no-repeat top right;
  background-size: contain;
}
}
@media(max-width:374px){
.btn-title{
  font-size:1rem
}
.sub-txt {
    width:50%
}
}

@media(min-width:567px){
  .sub-txt {
    width: 75%;
}
}

@media(min-width:768px){
  #custom{
  background: url(https://www.jennycraig.com/media/jc/ratecard/12272024/custom_menu_food-dt.webp)#fff no-repeat top right;
  background-size: contain;
}
#favorites{
  background: url(https://www.jennycraig.com/media/jc/ratecard/12272024/lava_cake-dt.webp)#fff no-repeat top right;
  background-size: contain;
}
.step-check{
  width:1.4rem;
}
}

@media(min-width:992px){
  .menu-btn{
    padding:1rem;
  }
}
</style>
