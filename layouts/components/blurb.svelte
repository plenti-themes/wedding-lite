<script>
    export let title, background, desc, order;
</script>

<section class="blurb-section section-padding" id="section_{order}" style="background: url({background});">
    <div class="container">
        <div class="row">

            <div class="section-title-wrap">
                <h2 class="section-title">{title}</h2>

                <div class="section-title-bottom">
                    <span class="section-title-line"></span>
                    <i class="section-title-icon bi-heart-fill"></i>
                    <span class="section-title-line"></span>
                </div>
            </div>

            <div class="desc">{@html desc}</div>

        </div>
    </div>
</section>

<style>
    .container {
        background: var(--white-color);
        border-radius: var(--border-radius-medium);
        padding: 50px;
    }
</style>