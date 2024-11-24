<script setup>
import { ref, onMounted } from 'vue';
import Hero from "@/components/Home/Hero.vue";
import GetStarted from "@/components/Home/GetStarted.vue";
import Constructions from "@/components/Home/Constructions.vue";
import Services from "@/components/Home/Services.vue";
import AltServices from "@/components/Home/AltServices.vue";
import Features from "@/components/Home/Features.vue";
import Projects from "@/components/Home/Projects.vue";
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
        <Hero />
        <GetStarted />
        <Constructions />
        <Services />
        <AltServices />
        <Features />
        <Projects />
        <!-- <Testimonials />     -->

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
