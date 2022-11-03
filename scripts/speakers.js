const speakers = [
  {
    id: 1,
    name: "Seif Hateb",
    profession: "Security Architect (12+ years of experience) with success in guiding design, testing, and implementation of leading-edge technology solutions.",
    img_url: "https://res.cloudinary.com/shellmates-club/image/upload/v1648752673/infosecweek_site/speakers/1633552821677_mv7qbo.jpg",
    activity: "Conference : How to secure 5G networks",
  },
  {
    id: 2,
    name: "Bellal Arezki Mustapha",
    profession: "Cyber Security Assistant Manager at Deloitte ",
    img_url: "https://res.cloudinary.com/shellmates-club/image/upload/v1648752677/infosecweek_site/speakers/37055938_1982889151742838_4728724276675346432_n_z0tril.jpg",
    activity: "Conference : Next Generation Security Solutions",
  },
  {
    id: 3,
    name: "Amine Merzouk",
    profession: "PhD Student in Adversarial Machine Learning and a Teaching Assistant at Polytechnique Montréal",
    img_url: "https://res.cloudinary.com/shellmates-club/image/upload/v1648752675/infosecweek_site/speakers/IMG_20220328_161019_qcnzag.jpg",
    activity: "Talk : Security Threats on Machine Learning",
  },
  {
    id: 4,
    name: "Nasreddine Bencherchali",
    profession: "Detection Engineer, Threat Hunter and Security Researcher",
    img_url: "https://res.cloudinary.com/shellmates-club/image/upload/v1648830846/infosecweek_site/speakers/Nasreddine_Bencherchali_whvhpx.jpg",
    activity: "Talk : LOLBIN’s! What, How and Why",
  },
  {
    id: 5,
    name: "Meriem Laroui",
    profession: "Cyber Security Consultant at KPMG",
    img_url: "https://res.cloudinary.com/shellmates-club/image/upload/v1648752705/infosecweek_site/speakers/IMG_20220131_200308_hjkbe8.jpg",
    activity: "Conference : Data Breaches",
  },
];

document.getElementById("speakers-list").innerHTML = `

${speakers
  .map(
    (speaker) =>
      `<div
            class="speaker ml-[20px] md:flex md:justify-between md:items-center md:my-[10vw] lg:my-[5vw] md:ml-0" key=${speaker.id}
        >
            <div class="speaker-info font-raleway text-white mb-10">
                <h1
                class="font-righteous text-[calc(22px+1.1vw)] my-[calc(5px+.3vw)] mb-[2.4vw]"
                >
                     ${speaker.activity}
                </h1>
                <h2 class="text-[calc(18px+1.1vw)] font-bold tracking-wide">
                    ${speaker.name}
                </h2>
                <p
                  class="text-[calc(14px+.9vw)] max-w-[30ch] leading-[1.25] mb-6"
                >
                    ${speaker.profession}
                 </p>
            </div>
        <div
        class="speaker-img w-[calc(200px+4vw)] md:h-[290px] lg:h-[320px] md:mx-0 h-64 lg:mx-12 ml-20 mb-16 md:mb-0 self-center"
        >
            <img
                src=${speaker.img_url}
                alt="speaker.png"
                class="w-full h-full object-cover"
            />
        </div>
    </div>`
  )
  .join("")}

`;
