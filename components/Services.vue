<template>
<section id="services" class="container">
<h3 class="text-center text-red">{{ t('services.title') }}</h3>
<div class="cards mt-4">
<div class="card">⚙️ <strong>DevOps</strong><p>{{ t('services.items.devops') }}</p></div>
<div class="card">💻 <strong>Web</strong><p>{{ t('services.items.web') }}</p></div>
<div class="card">🤖 <strong>AI</strong><p>{{ t('services.items.ai') }}</p></div>
<!--<div class="card">🌱 <strong>Green Consulting</strong><p>{{ t('services.items.green') }}</p></div>-->
</div>
</section>
</template>


<script setup lang="ts">
const { t } = useI18n()
</script>

<style>
#services {
    color: white;
}
</style>