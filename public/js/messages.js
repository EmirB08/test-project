document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		const message = document.getElementById("message").value;

		fetch("/submit-form", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				form.reset();
			})
			.catch((error) => console.error("Error:", error));
	});
});
