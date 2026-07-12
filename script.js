/* ==========================================
   GospelSphere v0.1
      Main JavaScript
      ========================================== */

      document.addEventListener("DOMContentLoaded", () => {

          console.log("Welcome to GospelSphere");

              /* Fade in cards */
                  const cards = document.querySelectorAll(".card");

                      const observer = new IntersectionObserver((entries) => {

                              entries.forEach(entry => {

                                          if (entry.isIntersecting) {

                                                          entry.target.style.opacity = "1";
                                                                          entry.target.style.transform = "translateY(0)";

                                                                                      }

                                                                                              });

                                                                                                  }, {
                                                                                                          threshold: 0.2
                                                                                                              });

                                                                                                                  cards.forEach(card => {

                                                                                                                          card.style.opacity = "0";
                                                                                                                                  card.style.transform = "translateY(40px)";
                                                                                                                                          card.style.transition = "0.6s ease";

                                                                                                                                                  observer.observe(card);

                                                                                                                                                      });

                                                                                                                                                          /* Hero button */

                                                                                                                                                              const joinButton = document.querySelector(".btn-primary");

                                                                                                                                                                  joinButton.addEventListener("click", function(e){

                                                                                                                                                                          e.preventDefault();

                                                                                                                                                                                  alert("Welcome to GospelSphere.\nRegistration will be available in the next development phase.");

                                                                                                                                                                                      });

                                                                                                                                                                                      });
                                                                                                                                                                                      /* Mobile Navigation */

                                                                                                                                                                                      const menuToggle = document.getElementById("menu-toggle");
                                                                                                                                                                                      const navbar = document.getElementById("navbar");

                                                                                                                                                                                      menuToggle.addEventListener("click", () => {

                                                                                                                                                                                          navbar.classList.toggle("active");

                                                                                                                                                                                          });
                                                                                                                                                                                          