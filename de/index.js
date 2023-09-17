document.getElementById("submit").addEventListener("click", () => {
    const year = document.getElementById("year").value;
    const current_year = new Date().getFullYear()
    const text = document.getElementById("text");
    const image = document.getElementById("image");
    if (year < 1928)  {
        image.setAttribute("src", "../assets/grabstein.png");
        text.innerHTML = "Es tut mir leid, aber die älteste Generation hier ist die Silent Generation, die von 1928 bis 1945 dauerte. Du musst älter sein als das ... und wahrscheinlich tot.";
    } else if (year >= 1928 && year <= 1945) {
        image.setAttribute("src", "../assets/759-7598062_1023-x-724-7-cartoon-ww2-tank.png");
        text.innerHTML = "Du bist in der sogenannten <strong>'Silent Generation'</strong>! Die Generation Silent wurde vor allem durch den 2. Weltkrieg geprägt, mit den entsprechenden Unsicherheiten und den großen Entbehrungen. Eine stille Generation, weil es gefährlich war, die Gedanken offen auszusprechen. Aber auch eine aktive, anpackende Generation, welche gelernt hat, das Beste aus der Situation zu machen.";
    } else if (year >= 1946 && year <= 1964) {
        image.setAttribute("src", "../assets/publicdomainq-family.png");
        text.innerHTML = "Du bist in der sogenannten <strong>'Generation Boomer'</strong>! Auch genannt <em>'Baby Boomer'</em>. Du kennst wahrscheinlich den Satz 'Ok Boomer'. Die Generation der Baby Boomer hat sehr stark den wirtschaftlichen Aufschwung mit hohen Wachstumsraten erlebt. Ebenso die Generation mit den höchsten Geburtenzahlen (ab 1964 Pillenknick). In ihre Zeit fällt die Friedensbewegung und die Umweltbewegung, wirtschaftlich sind nur wenige Krisen (Ölkrise) zu bewältigen. Diese Generation ist auf Konkurrenzverhalten, auf Aufmerksamkeit und Individualität fokussiert."
    } else if (year >= 1965 && year <= 1980) {
        image.setAttribute("src", "../assets/pngtree-protest-demonstration-revolution-political-manifestation-picture-image_7833543.png");
        text.innerHTML = "Du bist in der sogenannten <strong>'Generation X'</strong>! Auch genannt <em>'Slacker'</em>. Die Generation X wurde geprägt durch großen technischen Fortschritt, Ausbau des Umweltschutzes, Umweltkatastrophen (Ozonloch, Tschernobyl), Integrationsprozess der EU, Konjunkturkrisen und einer wachsenden Arbeitslosigkeit, steigenden Scheidungsraten und Doppelverdiener (der Eltern). Es ist aber auch die erste Generation ohne Kriegseinwirkung. Arbeit ist ein zentraler Lebensinhalt, wobei alternative, individuelle Lebensentwürfe und die Work-Life-Balance wichtig sind. Dabei herrscht aber eine große Orientierungslosigkeit."
    } else if (year >= 1981 && year <= 1996) {
        image.setAttribute("src", "../assets/Stress-pana-1-1024x1024.png");
        text.innerHTML = "Du bist in der sogenannten <strong>'Generation Y'</strong>! Auch genannt <em>'Millenials'</em>. Die Generation Y ist in einer Multioptionsgesellschaft groß geworden. Geprägt wurde sie durch die Terroranschläge 9/11, eine hohe Jugendarbeitslosigkeit und durch einen hohen Anteil Unsicherheit. Dies ist auch der Grund, dass diese Generation «Why» (=Warum) genannt wird. Unsicherheit ist für diese Generation ganz normal. Anstelle von Status und Prestige steht die Freude an der Arbeit, Freiräume, Selbstverwirklichung und Freizeit im Vordergrund. In der Generation Y hat es besonders viele H.E.N.R.Y.’s, ein Kundensegment, dass sehr gut verdient, aber noch nicht reich ist. Die Generation Y ist die erste Generation von Digital Natives."
    } else if (year >= 1997 && year <= 2009) {
        image.setAttribute("src", "../assets/1585223904867.png");
        text.innerHTML = "Du bist in der sogenannten <strong>'Generation Z'</strong>! Auch genannt <em>'Zoomer'</em>. Die Generation Z ist mit dem Internet und den mobilen Geräten (Tablets, Smartphones) groß geworden und gilt auch als Digital Natives. Soziale Netzwerke (facebook, Instagram usw.) werden ohne Rücksichtnahme auf die eigene Privatsphäre genutzt. Die Generation Z konzentriert sich nur auf ihre eigenen persönlichen Ziele, dadurch sind sie Einzelkämpfer und Individualisten. Die Lebenslust und die Maximierung von Erlebnissen treibt sie an und nicht festgelegte Strukturen und Abläufe. Wissen wird ausschließlich über das Internet jeweils situativ abgefragt. In der Generation Z hat es besonders viele Smombie’s, welche einen ständigen Blick auf ihr Smartphone haben. Berufseinsteiger in den Zeiten der Covid-19-Pandemie gehören auch zu der sogenannten Generation Lockdown."
    } else if (year >= 2010 && year <= 2025) {
        image.setAttribute("src", "../assets/bloking_Tik_Tok-02-1.png");
        text.innerHTML = "Du bist in der sogenannten <strong>'Generation Alpha'</strong>! Die Generation Alpha (Gen Alpha oder Generation α) ist die Nachfolge-Generation von der Generation Z. Es handelt sich um die Generation, die in etwa zwischen 2010 und (2025) geboren ist oder geboren wird, und ist die Generation, welche komplett mit den Technologien des 21. Jahrhunderts aufwachsen wird. Ihr Leben, d.h. ihre Denk- und Lebensweise, ist noch um ein Vielfaches digitaler, als es bei den Digital Natives der Fall ist. Diese Generation wird geprägt durch die weitere Digitalisierung, die politische Instabilität und dem demografischen Wandel."
    } else if (year > 2025) {
        image.setAttribute("src", "../assets/tardis.png");
        text.innerHTML = "Hab den Zeitreisenden gefunden!"
    } else {
        image.setAttribute("src", "../assets/photo-1623827007540-3fd8536497d5.jpg");
        text.innerHTML = "Gratuliere, du hast etwas kaputt gemacht. Hier, ein Katzenbild!"
    }
});