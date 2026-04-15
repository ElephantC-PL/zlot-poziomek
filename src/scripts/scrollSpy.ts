export function initScrollSpy(): void {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("a[data-section]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.id;

                const link = document.querySelectorAll(
                `a[data-section="#${id}"]`
                );

                if (entry.isIntersecting) {
                navLinks.forEach((l) => l.classList.remove("active"));
                link?.forEach((l) => l.classList.add("active"));
                }
            });
        },
        {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // aktywacja w środku viewportu
            threshold: 0,
        }
    );

    sections.forEach((section) => observer.observe(section));
}