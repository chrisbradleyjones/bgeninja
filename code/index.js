function goto(relativePath) {
	  var basePath = window.location.pathname;
	  var newPath = basePath.substring(0, basePath.lastIndexOf('/')) +  relativePath;
	  window.location.href = newPath;
	}
	function scrollToSection(sectionId) {
	  const section = document.getElementById(sectionId);
	  if (section) {
	    window.scrollTo({
	      behavior: 'smooth',
	      top: section.offsetTop
	    });
	  }
	}
	document.querySelectorAll('nav a').forEach(link => {
	  link.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
	// Check if the link is internal or external
		if (href.startsWith('#')) {
		  e.preventDefault();
		  const sectionId = href.slice(1);
		  scrollToSection(sectionId);
	}
	});
	});
    window.addEventListener('scroll', function() {
        var navBar = document.querySelector('.nav-bar');
        if (window.scrollY > 0) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });