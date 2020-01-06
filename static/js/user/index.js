function load_html(event)
{
    var src_id = event.src_id;
    var dst_id = event.dst_id;
    var html_path = $("#" + src_id).attr("value");
    $.ajax({
        type : "GET",
        url : html_path,
        cache: false,
        success : function(data) {
            $("#"+ dst_id).html(data);
        }
    });
}

function do_main(event)
{
    $(".active").removeClass("active");
    load_html({src_id: "main", dst_id:"content"});
}


function do_features(event)
{
    $(".active").removeClass("active");
    $("#features").addClass("active");
    load_html({src_id: "features", dst_id:"content"});
}

function do_scenes(event)
{
    $(".active").removeClass("active");
    $("#scenes").addClass("active");
    load_html({src_id: "scenes", dst_id:"content"});
}

function do_dev_access(event)
{
    $(".active").removeClass("active");
    $("#dev_access").addClass("active");
    load_html({src_id: "dev_access", dst_id:"content"});
}

function do_provider_info(event)
{
    $(".active").removeClass("active");
    $("#provider_info").addClass("active");
    load_html({src_id: "provider_info", dst_id:"content"});
}

function do_device_check(event)
{
    $(".active").removeClass("active");
    $("#device_check").addClass("active");
    load_html({src_id: "device_check", dst_id:"content"});
}

function do_device_run(event)
{
    $(".active").removeClass("active");
    $("#device_run").addClass("active");
    load_html({src_id: "device_run", dst_id:"content"});
}

function do_access_tips(event)
{
    $(".active").removeClass("active");
    $("#access_tips").addClass("active");
    load_html({src_id: "access_tips", dst_id:"content"});
}

function initiate()
{
    $("#main").bind("click", {}, do_main);
    $("#features").bind("click", {}, do_features);
    $("#scenes").bind("click", {}, do_scenes);
    $("#dev_access").bind("click", {}, do_dev_access);
    $("#provider_info").bind("click", {}, do_provider_info);
    $("#device_check").bind("click", {}, do_device_check);
    $("#device_run").bind("click", {}, do_device_run);
    $("#access_tips").bind("click", {}, do_access_tips);
    do_main();
}

$(document).ready(initiate);
