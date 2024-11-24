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
    <PageTitle title="Allgemeine Geschäftsbedingungen" breadcrumb="AGB" backgroundImage="/img/page-title-bg.jpg" />
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
                    <h1>{{ $t('terms.title') }}</h1>
                    <p>{{ $t('terms.content') }}</p>
                    <h2>{{ $t('terms.article.1.title') }}</h2>
                    <p>{{ $t('terms.article.1.list.1') }}</p>
                    <h2>{{ $t('terms.article.2.title') }}</h2>
                    <p>{{ $t('terms.article.2.list.1') }}</p>
                    <h2>{{ $t('terms.article.3.title') }}</h2>
                    <h3>{{ $t('terms.article.3.title1') }}</h3>
                    <p>{{ $t('terms.article.3.list.1') }}</p>
                    <h3>{{ $t('terms.article.3.title2') }}</h3>
                    <p>{{ $t('terms.article.3.list.2') }}</p>
                    <h2>{{ $t('terms.article.4.title') }}</h2>
                    <p>{{ $t('terms.article.4.list.1') }}</p>
                    <h2>{{ $t('terms.article.5.title') }}</h2>
                    <p>{{ $t('terms.article.5.list.1') }}</p>               
                    <h2>{{ $t('terms.article.6.title') }}</h2>
                    <p>{{ $t('terms.article.6.list.1') }}</p>
                    <h2>{{ $t('terms.article.7.title') }}</h2>
                    <b>{{ $t('terms.article.7.list.1') }}</b><br/>
                    <span>{{ $t('terms.article.7.list.2') }}</span><br/>
                    <span>{{ $t('terms.article.7.list.3') }}</span><br/>
                    <span>{{ $t('terms.article.7.list.4') }}</span><br/>
                    <span>{{ $t('terms.article.7.list.5') }}</span><br/>

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
