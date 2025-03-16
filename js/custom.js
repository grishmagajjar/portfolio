// sticky header starts
window.onscroll = function() {myFunction()};
var header = document.getElementById("site-header");
var sticky = header.offsetTop;
function myFunction() {
 if (window.pageYOffset > sticky) {
 header.classList.add("sticky");
 } else {
 header.classList.remove("sticky");
 }
}
// sticky header ends

function setCurrentMenuPage() {
    var url = window.location.href;
    var anchors = jQuery('#mega-menu-primary a');
    anchors.parent('li').removeClass('current-page').parent('ul').siblings('a').removeClass('active').parent().parent('ul').siblings('a').removeClass('active');
    anchors.filter(function () {
        return this.href == url;
    }).parent('li').addClass('current-page').parent('ul').siblings('a').addClass('active').parent().parent('ul').siblings('a').addClass('active');
}
jQuery(function () {
    setCurrentMenuPage();
    jQuery('#mega-menu-primary a').on('click', function (e) {
        if (jQuery(this).attr('href').indexOf("#") >= 0) {
            setTimeout(function () {
                setCurrentMenuPage();
            }, 100);
        }
    });
});

jQuery("#video-popup").click(function(){
    jQuery("body").toggleClass("video-popup");
});    
jQuery("#close").click(function(){
    jQuery("body").toggleClass("video-popup");

        // Stop video by resetting the iframe src
        var iframe = jQuery("#video-content iframe");
        var videoSrc = iframe.attr("src"); // Store original src
        iframe.attr("src", ""); // Remove src to stop video
        iframe.attr("src", videoSrc); // Restore src when reopened
});   