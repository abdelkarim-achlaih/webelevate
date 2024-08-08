const lenis = new Lenis({
	duration: 3,
	easing: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const NavItems = document.querySelectorAll(".nav-item .nav-link");
const Orders = document.querySelectorAll(".service .order a");

scrollNavs(NavItems);
scrollNavs(Orders);

function scrollNavs(navs) {
	navs.forEach((nav) => {
		nav.addEventListener("click", (e) => {
			options = {
				duration: 5,
			};
			lenis.scrollTo(nav.getAttribute("href"), options);
		});
	});
}
