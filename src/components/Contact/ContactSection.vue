<script setup></script>

<template>
      <!-- Contact Section -->
      <section id="contact" class="contact section">

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-6">
      <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
        <i class="bi bi-geo-alt"></i>
        <h3>Adresse</h3>
        <p>Cami de Son Arrosa S/n Poligono,10 Parcela N° 133, 07143 Biniali</p>
      </div>
    </div><!-- End Info Item -->

    <div class="col-lg-3 col-md-6">
      <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
        <i class="bi bi-telephone"></i>
        <h3>Direkt anrufen</h3>
        <p>+34 613 977 931</p>
      </div>
    </div><!-- End Info Item -->

    <div class="col-lg-3 col-md-6">
      <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
        <i class="bi bi-envelope"></i>
        <h3>Direkt per E-mail</h3>
        <p>info@harry-buck.com</p>
      </div>
    </div><!-- End Info Item -->

  </div>

  <div class="row gy-4 mt-1">
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98425.1989646491!2d2.81664!3d39.6293653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297c8b8b8b8b8b9%3A0x0!2sH.Buck+Neu-und+Betonbau%2C+S.L%2C+Cami+de+Son+Arrosa+S%2Fn+Poligono%2C10+Parcela+N%C2%B0+133%2C+07143+Biniali%2C+Balearic+Islands!5e0!3m2!1sen!2ses!4v1624981234567!5m2!1sen!2ses" frameborder="0" style="border:0; width: 100%; height: 400px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div><!-- End Google Maps -->

    <div class="col-lg-6">
      <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="400">
        <div class="row gy-4">

          <div class="col-md-6">
            <input type="text" name="name" class="form-control" placeholder="Ihr Name" required="">
          </div>

          <div class="col-md-6 ">
            <input type="email" class="form-control" name="email" placeholder="Ihre E-mail" required="">
          </div>

          <div class="col-md-12">
            <input type="text" class="form-control" name="subject" placeholder="Betreff" required="">
          </div>

          <div class="col-md-12">
            <textarea class="form-control" name="message" rows="6" placeholder="Nachricht" required=""></textarea>
          </div>

          <div class="col-md-12 text-center">
            <div class="loading">Ladet...</div>
            <div class="error-message"></div>
            <div class="sent-message">Ihre Nachricht wurde gesendet. Danke!</div>

            <button type="submit">Nachricht senden</button>
          </div>

        </div>
      </form>
    </div><!-- End Contact Form -->

  </div>

</div>

</section><!-- /Contact Section -->
</template>