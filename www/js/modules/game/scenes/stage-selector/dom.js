// Game Stage Selector button click
$(document).on("vclick", "#game-menu #game-button-stage-selector", function(e) {
	e.preventDefault();

	// Hide all modals and then show stage selector modal
	game_modal_hideAll(() => Sidescroller.Scenes.stageSelector());
});

// On stage select
$(document).on("vclick", "#game-stage-selector .game-stage", function() {
	$(".game-stage.active").removeClass("active");
	$(this).addClass("active");

	Sidescroller.Stages.current 	= $(this).data("id");

	$("#game-stage-selector #game-button-start").prop("disabled", false);
});