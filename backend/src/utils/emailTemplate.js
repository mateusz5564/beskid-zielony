module.exports = {
    subject: "Beskid zielony - informacja czwartkowa <%= dataNewslettera %>",
    text: `Zapraszamy do zapoznania się z najnowszą informacją czwartkową`,
    html: `
    <div style="font-family: 'Brush Script MT', cursive; max-width: 600px; margin: 0 auto; background-color: rgb(234, 253, 238); padding: 20px; border-radius: 5px; color: rgb(1, 69, 32);">
    <div style="text-align: center;">
      <img src="https://beskid-zielony.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c85437c7.png&w=1200&q=75" style="width: 7rem;">
    </div>
    <h1 style="margin-bottom: 2rem; font-size: 1.6rem; font-weight: 500; text-align: center; text-transform: uppercase;">
      Informacja czwartkowa
      <span style="display: block; text-transform: uppercase; font-size: .9rem;">
        BIULETYN - NEWSLETTER NR <%- numer %>/<%- dataNewslettera %>>
      </span>
    </h1>
    <a href="https://beskid-zielony.herokuapp.com/informacja-czwartkowa/<%- id %>" style="display: block; text-align: center;">sprawdź pełną informacje na naszej stronie</a>
    <hr>
    <h2 style="font-size: 1.4rem; font-weight: 500; margin: .5rem 0;">Wydarzenia:<h2 style="font-size: 1.4rem; font-weight: 500; margin: .5rem 0;">
    <ul style="font-size: .8rem;">
    <!--   <% _.forEach(wydarzenia, function(event) { %> -->
    <li style="margin-bottom: .5rem;">
      <div>
        <h3 style="font-size: 1rem; font-weight: 500; margin: 0;">
          <%- event.tytul %>
        </h3>
        <p style="font-size: .6rem; font-weight: 300; margin: 0;"> <%- event.termin %> <%- event.miejscowosc %> </p>
      </div>
    </li>
    <!--   <% }); %> -->
    </ul>
      <hr>
    <h2 style="font-size: 1.4rem; font-weight: 500; margin: .5rem 0;">Wydarzenia czasowe</h2>
    <ul style="font-size: .8rem;">
    <!--   <% _.forEach(wydarzenia, function(event) { %> -->
      <li style="margin-bottom: .5rem;">
        <div>
          <h3 style="font-size: 1rem; font-weight: 500; margin: 0;">
            <%- event.tytul %>
          </h3>
          <p style="font-size: .6rem; font-weight: 300; margin: 0;"> <%- event.termin %> <%- event.miejscowosc %> </p>
        </div>
      </li>
    <!--   <% }); %> -->
    </ul>
    </div>`
}