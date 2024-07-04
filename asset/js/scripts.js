function cards() {
  const cDataDiri = {
    akunSosial: {
      nama: [
        "Desrina Fatchuni Mah Putri",
        "Arya Bayu Hera Ramadhan",
        "Muhammad Ramadhan Syah Putra",
        "Ilham Syarif",
        "Al Maditha Zulfa",
      ],
      kata: [
        `<p class="card-text">
                  Do something today that your future self will thankyou for .
                </p>`,
        `<p class="card-text">
                  Abang mau makan dek🤤.
                </p>`,
        `<p class="card-text">
                  Anak langit🌌.
                </p>`,
        "",
        "",
      ],
      foto: [
        `<img
                  src="asset/img/my-team/Desrina.jpg"
                  class="w-100"
                />`,
        `<img
                  src="asset/img/my-team/Bayu.jpg"
                  class="w-100"
                />`,
        `<img
                  src="asset/img/my-team/Putra.jpg"
                  class="w-100"
                />`,
        `<img
                  src="asset/img/my-team/Ilham.jpg"
                  class="w-100"
                />`,
        `<img
                  src="asset/img/my-team/Ifa.jpg"
                  class="w-100"
                />`,
      ],
      instagram: [
        `<!-- Instagram -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #ac2bac"
                  href="https://www.instagram.com/dsrinaa_?igsh=b2NsMW5zZmU0a3F6 "
                  role="button"
                  ><i class="fab fa-instagram"></i>
                </a>`,
        `<!-- Instagram -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #ac2bac"
                  href="https://www.instagram.com/arbay.hr"
                  role="button"
                  ><i class="fab fa-instagram"></i>
                </a>`,
        `<!-- Instagram -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #ac2bac"
                  href="https://www.instagram.com/dhaan.468/"
                  role="button"
                  ><i class="fab fa-instagram"></i>
                </a>`,
        `<!-- Instagram -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #ac2bac"
                  href="https://www.instagram.com/ilhamsyrif?igsh=cDl4Mms2bTd0M3Zo"
                  role="button"
                  ><i class="fab fa-instagram"></i>
                </a>`,
        `<!-- Instagram -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #ac2bac"
                  href="https://www.instagram.com/_xcyfaa?igsh=MWJjdXRyaHA2OXdl"
                  role="button"
                  ><i class="fab fa-instagram"></i>
                </a>`,
      ],
      linkedIn: [
        "",
        `<!-- Linkedin -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #0082ca"
                  href="https://www.linkedin.com/in/arya-bayu-hera-ramadhan-53959a30a"
                  role="button"
                  ><i class="fab fa-linkedin-in"></i
                ></a>`,
        `<!-- Linkedin -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #0082ca"
                  href="https://www.linkedin.com/in/muhammad-ramadhan-syah-putra/"
                  role="button"
                  ><i class="fab fa-linkedin-in"></i
                ></a>`,
        `<!-- Linkedin -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #0082ca"
                  href="https://www.linkedin.com/in/ilham-syarif-3b5200317"
                  role="button"
                  ><i class="fab fa-linkedin-in"></i
                ></a>`,
        `<!-- Linkedin -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #0082ca"
                  href="https://www.linkedin.com/in/al-maditha-zulfa-61a918311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  role="button"
                  ><i class="fab fa-linkedin-in"></i
                ></a>`,
      ],
      twitter: [
        "",
        "",
        "",
        "",
        `<!-- Twitter -->
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style="background-color: #55acee"
                  href="https://x.com/KlyeeIfaaa?t=ExF1YOb5flZWvqdqx9bhFQ&s=08"
                  role="button"
                  ><i class="fab fa-twitter"></i
                ></a>`,
      ],
    },
  };
  return cDataDiri.akunSosial.nama.map(
    (akun, index) => `<div class="card">
              <div class="bg-image hover-overlay">
                ${cDataDiri.akunSosial.foto[index]}
                <div
                  class="mask"
                  style="
                    background: linear-gradient(
                      45deg,
                      hsla(37, 30%, 92%, 0.5),
                      hsla(176, 62%, 20%, 0.5) 100%
                    );
                  "
                ></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">${cDataDiri.akunSosial.nama[index]}</h5>
                ${cDataDiri.akunSosial.kata[index]}
                ${cDataDiri.akunSosial.instagram[index]}
                ${cDataDiri.akunSosial.twitter[index]}
                ${cDataDiri.akunSosial.linkedIn[index]}
              </div>
            </div>`
  );
}

const card = cards();
const pCard = document.getElementById("card");
card.forEach((e) => {
  const card = document.createElement("div");
  card.classList.add(
    "col-12",
    "col-sm-12",
    "col-md-6",
    "col-lg-4",
    "col-xl-4",
    "scroll"
  );
  card.innerHTML = e;
  pCard.appendChild(card);
});

let homeLink = document.querySelector(".home-link");
let aboutUsLink = document.querySelector(".about-us-link");
let contactUsLink = document.querySelector(".contact-us-link");

homeLink.addEventListener("click", function (e) {
  e.preventDefault();
  homeLink.classList.add("active");
  aboutUsLink.classList.remove("active-scroll");
  contactUsLink.classList.remove("active-scroll");

  let homeSection = document.getElementById("home");

  homeSection.scrollIntoView({
    behavior: "smooth",
  });
});
aboutUsLink.addEventListener("click", function (e) {
  e.preventDefault();

  homeLink.classList.remove("active-scroll");
  homeLink.classList.remove("active");
  aboutUsLink.classList.add("active-scroll");
  contactUsLink.classList.remove("active-scroll");

  let aboutUsSection = document.getElementById("about-us");

  aboutUsSection.scrollIntoView({ behavior: "smooth" });
});

contactUsLink.addEventListener("click", function (e) {
  e.preventDefault();

  homeLink.classList.remove("active-scroll");
  homeLink.classList.remove("active");
  aboutUsLink.classList.remove("active-scroll");
  contactUsLink.classList.add("active-scroll");

  let contactUsSection = document.getElementById("contact-us");

  contactUsSection.scrollIntoView({ behavior: "smooth" });
});

function submitFrom() {
  alert(
    "Sangat menghargai minat Anda untuk menghubungi kami! Namun, perlu diingat bahwa form ini hanya berisi data dummy. Jika ada pertanyaan lebih lanjut, jangan ragu untuk menghubungi saya melalui email di muhammadramadhansyahputra1@gmail.com.😊"
  );
}
