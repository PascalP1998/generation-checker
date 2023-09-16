document.getElementById("submit").addEventListener("click", () => {
    const year = document.getElementById("year").value;
    const current_year = new Date().getFullYear()
    const text = document.getElementById("text");
    const image = document.getElementById("image");
    if (year < 1928)  {
        image.setAttribute("src", "assets/grabstein.png");
        text.innerHTML = "I am sorry, but the oldest generation here is the Silent Generation, spanning from 1928 up until 1945. You must be older than that ... and probably dead.";
    } else if (year >= 1928 && year <= 1945) {
        image.setAttribute("src", "assets/759-7598062_1023-x-724-7-cartoon-ww2-tank.png");
        text.innerHTML = "You're in the so called <strong>'Silent Generation'</strong>! The Silent Generation was shaped above all by the Second World War, with the corresponding uncertainties and great deprivations. A silent generation, because it was dangerous to speak one's mind openly. But also an active, hands-on generation that learned to make the best of the situation.";
    } else if (year >= 1946 && year <= 1964) {
        image.setAttribute("src", "assets/publicdomainq-family.png");
        text.innerHTML = "You're in the so called <strong>'Generation Boomer'</strong>! Also called <em>'Baby Boomer'</em>. You are probably familiar with the sentence 'Ok Boomer'. The baby boomer generation experienced very strongly the economic upswing with high growth rates. They were also the generation with the highest birth rates (from 1964, the pill crunch). The peace movement and the environmental movement fall into their time, economically only a few crises (oil crisis) have to be overcome. This generation is focused on competitive behaviour, attention and individuality. "
    } else if (year >= 1965 && year <= 1980) {
        image.setAttribute("src", "assets/pngtree-protest-demonstration-revolution-political-manifestation-picture-image_7833543.png");
        text.innerHTML = "You're in the so called <strong>'Generation X'</strong>! Also called <em>'Slacker'</em>. Generation X was shaped by great technical progress, expansion of environmental protection, environmental disasters (hole in the ozone layer, Chernobyl), the integration process of the EU, economic crises and growing unemployment, rising divorce rates and double earners (of the parents). But it is also the first generation without the impact of war. Work is a central purpose in life, with alternative, individual life plans and work-life balance being important. However, there is a great lack of orientation."
    } else if (year >= 1981 && year <= 1996) {
        image.setAttribute("src", "assets/Stress-pana-1-1024x1024.png");
        text.innerHTML = "You're in the so called <strong>'Generation Y'</strong>! Also called <em>'Millenials'</em>. Generation Y has grown up in a multi-option society. It was shaped by the 9/11 terrorist attacks, high youth unemployment and a high level of insecurity. This is also the reason why this generation is called 'Why'. Insecurity is quite normal for this generation. Instead of status and prestige, the focus is on the joy of work, freedom, self-realisation and free time. Generation Y has a particularly large number of H.E.N.R.Y.'s, a customer segment that earns very well but is not yet rich. Generation Y is the first generation of digital natives."
    } else if (year >= 1997 && year <= 2009) {
        image.setAttribute("src", "assets/1585223904867.png");
        text.innerHTML = "You're in the so called <strong>'Generation Z'</strong>! Also called <em>'Zoomer'</em>. Generation Z has grown up with the internet and mobile devices (tablets, smartphones) and are also considered digital natives. Social networks (facebook, Instagram, etc.) are used without regard for their own privacy. Generation Z focuses only on their own personal goals, making them lone wolves and individualists. They are driven by the love of life and the maximisation of experiences, not by fixed structures and processes. Knowledge is sought exclusively via the internet, depending on the situation. Generation Z has a particularly large number of smombie's who are constantly looking at their smartphones. Young professionals in the times of the Covid 19 pandemic also belong to the so-called Generation Lockdown."
    } else if (year >= 2010 && year <= 2025) {
        image.setAttribute("src", "assets/bloking_Tik_Tok-02-1.png");
        text.innerHTML = "You're in the so called <strong>'Generation Alpha'</strong>! Generation Alpha (Gen Alpha or Generation α) is the successor generation to Generation Z. It is the generation that was born or will be born roughly between 2010 and 2025. It is the generation that was born or will be born roughly between 2010 and (2025) and is the generation that will grow up completely with the technologies of the 21st century. Their lives, i.e. their way of thinking and living, are still many times more digital than is the case with the digital natives. This generation will be shaped by further digitalisation, political instability and demographic change."
    } else if (year > 2026) {
        image.setAttribute("src", "assets/tardis.png");
        text.innerHTML = "Found the Time Traveler!"
    } else {
        image.setAttribute("src", "assets/photo-1623827007540-3fd8536497d5.jpg");
        text.innerHTML = "Congrats, you broke something. Have a cat pic!"
    }
});