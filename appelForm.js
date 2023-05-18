
$(document).ready(function () {
    $('#accordion-buttonDDC').click(function () {
        $.ajax({
            url: './form/formDDC.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#formDDC').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#accordion-buttonAAbs').click(function () {
        $.ajax({
            url: './form/formAAbs.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#formAAbs').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#accordion-buttonFDM').click(function () {
        $.ajax({
            url: './form/formFDM.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#formFDM').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#accordion-buttonRFDM').click(function () {
        $.ajax({
            url: './form/formRFDM.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#formRFDM').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#accordion-buttonRSDC').click(function () {
        $.ajax({
            url: './form/formRSDC.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#formRSDC').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#accordion-buttonSDC').click(function () {
        $.ajax({
            url: './form/formSDC.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#formSDC').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


