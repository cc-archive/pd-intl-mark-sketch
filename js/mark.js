var linkRevealer = function(toggleName, entityName) {
  var entity = $(entityName);
  $(toggleName).on('click', function(e) {
    e.preventDefault();
    entity.toggleClass('hidden');
  });
  entity.addClass('hidden');
};

$(document).ready(function () {
  linkRevealer('#details-what', '#details-help');
});
