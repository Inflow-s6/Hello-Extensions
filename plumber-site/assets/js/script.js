"use strict";

(function () {
	const navToggle = document.querySelector(".nav-toggle");
	const menu = document.getElementById("menu");
	const yearEl = document.getElementById("year");
	const form = document.getElementById("contact-form");

	if (yearEl) {
		yearEl.textContent = String(new Date().getFullYear());
	}

	if (navToggle && menu) {
		navToggle.addEventListener("click", () => {
			const expanded = navToggle.getAttribute("aria-expanded") === "true";
			navToggle.setAttribute("aria-expanded", String(!expanded));
			menu.classList.toggle("open");
		});
		menu.addEventListener("click", (e) => {
			const target = e.target;
			if (target && target.tagName === "A") {
				menu.classList.remove("open");
				navToggle.setAttribute("aria-expanded", "false");
			}
		});
	}

	if (form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const nome = document.getElementById("nome");
			const email = document.getElementById("email");
			const mensagem = document.getElementById("mensagem");

			let valid = true;
			[ nome, email, mensagem ].forEach((el) => {
				if (el && !el.value.trim()) {
					valid = false;
					el.focus();
				}
			});

			if (email && email.value) {
				const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!re.test(email.value)) {
					valid = false;
					email.focus();
				}
			}

			if (!valid) return;

			alert("Obrigado! Entraremos em contacto em breve.");
			form.reset();
		});
	}
})();