$(document).ready(function() {
	$('i').hover(
		function() {
			$(this).css('font-size', '90px');
		},
		function() {
			$(this).css('font-size', '64px');
		}
	);
});
function loadRepos() {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let repos = JSON.parse(this.responseText);
			for (let i = 0; i < repos.length; i++) {
				$('#postRepos').append('<p>' + repos[i].name + '</p>');
			}
		}
	};
	xhttp.open('GET', 'https://api.github.com/users/ny5us/repos', true);
	xhttp.send();
}