<script setup>
import { ref, onMounted } from 'vue';
import PageTitle from "@/components/PageTitle.vue";
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
    <PageTitle title="Datenschutzrichtlinie" breadcrumb="Datenschutzrichtlinie" backgroundImage="/img/page-title-bg.jpg" />
    <section id="projects" class="projects section">

        <div class="container">
            <div class="row">
                <div class="col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                    <!-- BEGIN LEFT SIDEBAR -->
                    <div class="row categories-list">
                        <div class="service-details">
                            <!-- <HelpSidebar :phone_number="phone_number" /> -->
                        </div>
                    </div>
                </div> <!-- END LEFT SIDEBAR -->
                <div class="col-lg-8 d-flex flex-column align-items-stretch"> <!-- BEGIN RIGHT SIDEBAR -->
                    <div class="container">
                        <h1>{{ $t('privacy.title.1') }}</h1>
                        <h2>{{ $t('privacy.subtitle.1') }}</h2>
                        <p>{{ $t('privacy.content.1') }}</p>

                        <h3>{{ $t('privacy.title.2') }}</h3>
                        <p>{{ $t('privacy.content.2') }}</p>

                        <h3>{{ $t('privacy.title.3') }}</h3>
                        <p>{{ $t('privacy.content.3') }}</p>

                        <h3>{{ $t('privacy.title.4') }}</h3>
                        <p>{{ $t('privacy.content.4') }}</p>

                        <h3>{{ $t('privacy.title.5') }}</h3>
                        <p>{{ $t('privacy.content.5') }}</p>

                        <h3>{{ $t('privacy.title.6') }}</h3>
                        <p>{{ $t('privacy.content.6') }}</p>
                        <p>{{ $t('privacy.email') }}</p>
                        <p>{{ $t('privacy.phone') }}</p>
                    </div> <!-- END container -->
                </div> <!-- END RIGHT SIDEBAR -->
            </div> <!-- END row -->
        </div>
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
    </section>
    <div>
    </div>

</template>

<style lang="scss" scoped></style>