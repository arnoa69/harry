<template>
    <!-- Get Started Section -->
    <section id="get-started" class="get-started section">

<div class="container">

  <div class="row justify-content-between gy-4">

    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
      <div class="content">
        <h3>Holen Sie jetzt Ihr kostenloses Angebot ein!</h3>
        <p>Von der Planung bis zur Schlüsselübergabe – wir begleiten Sie bei Ihrem Bauvorhaben. Fordern Sie jetzt Ihr kostenloses Angebot an und erfahren Sie mehr über unsere Leistungen.
        </p>
        <p>Sie haben ein Bauprojekt auf Mallorca? Teilen Sie uns Ihre Wünsche mit und wir erstellen Ihnen ein maßgeschneidertes Angebot.</p>
      </div>
    </div>

    <div class="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
      <form action="forms/quote.php" method="post" class="php-email-form">
        <h3>Holen Sie jetzt Ihr kostenloses Angebot ein!</h3>
        <p>Sie möchten bauen, umbauen oder renovieren auf Mallorca? Teilen Sie uns Ihre Wünsche mit und wir erstellen Ihnen ein maßgeschneidertes Angebot. </p>
        <div class="row gy-3">

          <div class="col-12">
            <input type="text" name="name" class="form-control" placeholder="Name" required="">
          </div>

          <div class="col-12 ">
            <input type="email" class="form-control" name="email" placeholder="E-mail" required="">
          </div>

          <div class="col-12">
            <input type="text" class="form-control" name="phone" placeholder="Telefon" required="">
          </div>

          <div class="col-12">
            <textarea class="form-control" name="message" rows="6" placeholder="Nachricht" required=""></textarea>
          </div>

          <div class="col-12 text-center">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>

            <button type="submit">Angebot anfordern</button>
          </div>

        </div>
      </form>
    </div><!-- End Quote Form -->

  </div>

</div>

</section><!-- /Get Started Section -->
</template>

<script setup>

</script>
