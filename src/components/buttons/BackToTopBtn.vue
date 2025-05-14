<script setup>
    import $ from 'jquery';

    $(function () {
        $(window).scroll(function () {
        if (window.pageYOffset >= 499) {
            $("#back-to-top").removeClass("d-none");
            $("#back-to-top").on("click", function () {
            document.body.scrollIntoView({ block: "start", behavior: "smooth" });
            });
            }
        if (window.pageYOffset <= 399) {
          $("#back-to-top").addClass("d-none");
        }
        });
     });

</script>

<template>
    <div id="backToTopComponent">
        <button onclick="omni_track('BackToTop')" id="back-to-top" class="back-to-top d-none px-2 py-1 text-center position-fixed bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 9.25L3.75 15.5L4.625 16.375L10 11L15.375 16.375L16.25 15.5L10 9.25ZM2.5 5.5H17.5V6.75H2.5V5.5Z" fill="#16384E"></path></svg> 
            Back to Top 
        </button>
    </div>
</template>

<style scoped>
   .back-to-top  {
      border-radius: 6px 6px 0px 0px;
      border: none;
      background: var(--Action-Action-secondary,  #E8CAC2);
      box-shadow: 0px -2px 8px 0px rgba(0,  0,  0,  0.1);
      color: #16384E;
      font-family: Prompt,  sans-serif;
      font-size: 1.1875rem;
      line-height: 1.5;
      right: 12%;
      z-index: 10000;
  }
</style>