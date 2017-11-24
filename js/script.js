$(document).ready(function() {
    $('#border-wait-form').on('submit', function (e) {
        e.preventDefault();

        let dateTimeNow = new Date();

        let pikaKufitare = $('#pika-kufitare').val();


        // Hyrje/dalje ne minuta
        const hyrjeMinMinuta = $('#hyrje-min-minuta').val();
        const hyrjeMaxMinuta = $('#hyrje-max-minuta').val();
        const daljeMinMinuta = $('#dalje-min-minuta').val();
        const daljeMaxMinuta = $('#dalje-max-minuta').val();

        // Hyrje/dalje ne metra
        const hyrjeMinMetra = $('#hyrje-min-metra').val();
        const hyrjeMaxMetra = $('#hyrje-max-metra').val();
        const daljeMinMetra = $('#dalje-min-metra').val();
        const daljeMaxMetra = $('#dalje-max-metra').val();

        let dataJson = {
            "pikaKufitare": pikaKufitare,
            "hyrjeMinMinuta": parseInt(hyrjeMinMinuta),
            "hyrjeMaxMinuta": parseInt(hyrjeMaxMinuta),
            "daljeMinMinuta": parseInt(daljeMinMinuta),
            "daljeMaxMinuta": parseInt(daljeMaxMinuta),
            "hyrjeMinMetra": parseInt(hyrjeMinMetra),
            "hyrjeMaxMetra": parseInt(hyrjeMaxMetra),
            "daljeMinMetra": parseInt(daljeMinMetra),
            "daljeMaxMetra": parseInt(daljeMaxMetra),
            "dateTimeNow": dateTimeNow,
        };

        console.log(dataJson);

    })
});