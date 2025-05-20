<script setup>
    
</script>

<template>
    <section class="container-fluid club-jenny-member-acct"><div class="row"><div class="col-12"><p class="text-center px-3 py-1 p-lg-2-5">Already purchased access to Club Jenny? <RouterLink to="/account/profile" onclick="omni_track('GoToMyAccount');">Go to My Account</RouterLink></p></div></div></section>
</template>

<style scoped>
    .club-jenny-member-acct p {
        color: #16384e;
    }
    @media (min-width: 768px) {
        .club-jenny-member-acct p {
            font-size: 1.1875rem;
        }
    }
</style>