// Apache 2.0 J Chris Anderson 2011
$(function () {

    $('<ul id="studentList"/>').appendTo('#students');

    $.couch.db("mydb").view("couchtacty/list", {
        success: function (data) {

            var html = $.map(data.rows, function (value, index) {
                //console.info(value.key);

                var v = value.value;
                return "<li>" + v.name + ' ' + v.surname + '(' + v.email + ")</li>";
            });

            $(html).appendTo('#studentList');

        },
        error: function (status) {
            console.log(status);
        },
        reduce: false
    });

});