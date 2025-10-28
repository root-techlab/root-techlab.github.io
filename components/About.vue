<template>
<section id="about" class="container">
<h3 class="text-center">{{ t('about.title') }}</h3>
<p id="about-text" class="text-center" style="max-width:900px;margin:0.5rem auto">{{ t('about.text') }}</p>


<div class="cards mt-4">
<div class="card">
<strong>{{ t('about.iam') }}</strong>
<p class="mt-2">{{ t('about.me') }}</p>
</div>
<div class="card">
<strong>{{ t('about.mission') }}</strong>
<p class="mt-2">{{ t('about.misson-text') }}</p>
</div>
<div class="card">
<strong>{{ t('about.values') }}</strong>
<p class="mt-2">{{ t('about.values-text') }}</p>
</div>
</div>
</section>
</template>


<script setup lang="ts">
const { t } = useI18n()
</script>

<style>
#about-text {
    padding: 0px 10px;
    text-align: justify;
}
#about h3 {
    color: white;
}
</style>