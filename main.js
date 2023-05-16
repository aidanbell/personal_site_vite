particlesJS.load("particles-js", "particles.json");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

const triggerTabList = document.querySelectorAll('#nav-tab button');
triggerTabList.forEach(function (triggerEl) {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault();
    tabTrigger.show();
  });
})