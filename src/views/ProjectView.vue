<script setup>
import { ref, onMounted } from 'vue';
import PageTitle from "@/components/PageTitle.vue";
import ProjectDetailSection from "@/components/Projects/ProjectDetailSection.vue";
import { posthogModule } from "@/plugins/posthog";
import CookieBanner from "@/components/Cookiebanner/CookieBanner.vue";
import ManageCookieBanner from "@/components/Cookiebanner/ManageCookieBanner.vue";
import PolicyBanner from "@/components/Cookiebanner/PolicyBanner.vue";
import { hasConsentBeenGiven } from '@/services/cookieConsentService';

const showBanner = ref(true);
const showConfigBanner = ref(false)
const showPolicyBanner = ref(false)

onMounted(() => {
    showBanner.value = !hasConsentBeenGiven();
    posthogModule.posthog // Initialize PostHog
});

</script>

<template>
    <div>
        <PageTitle 
            title="Projektliste"
            breadcrumb="Projektliste"
            backgroundImage="/img/page-title-bg.jpg"
        />
        <ProjectDetailSection />
        <CookieBanner
            v-if="showBanner"
            @hideBanner="showBanner = false"
            @showManageBanner="showConfigBanner = true"
            @showPolicyBanner="showPolicyBanner = true"
        />
        <ManageCookieBanner
            v-if="showConfigBanner"
            @hideConfigBanner="showConfigBanner = false"
            @hideBothBanner="(showBanner = false), (showConfigBanner = false)"
        />
        <PolicyBanner
            v-if="showPolicyBanner"
            @hide-policy-banner="showPolicyBanner = false"
        />   
    </div>

</template>

<style lang="scss" scoped>

</style>