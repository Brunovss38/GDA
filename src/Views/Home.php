<?php

include_once __DIR__ . '/Includes/header.php';
include_once __DIR__ . '/Includes/navBarreCo.php';

?>

<ul class="nav nav-tabs mt-4 " id=" myTab" role="tablist">
    <li class="nav-item " role="presentation">
        <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Accueil</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Promotions</button>
    </li>

</ul>
<div class="tab-content" id="myTabContent">

    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <h2 class="mt-4">Cours du jour</h2>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <h2>Toutes les promotions</h2>
        <p>Tableau des promotions de Simplon</p>
        <?php

        include_once __DIR__ . '/Includes/Table.php';


        ?>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>