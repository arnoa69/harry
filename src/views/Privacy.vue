<script setup>
import PageTitle from "@/components/PageTitle.vue";
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

    </section>
    <div>
    </div>

</template>

<style lang="scss" scoped></style>