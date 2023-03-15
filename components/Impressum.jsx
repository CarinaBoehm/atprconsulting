import Header from "./Header"

function Impressum (){
    return(
        <main className="eyecatcher impressum">
            <Header/>
            <div className="contentbox">
                <h2>Impressum</h2>
                <div className="line"></div>
                <article >
                    <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
                    <p>atpr-Consulting<br />
                    Schillerstr. 25<br />
                    12207 Berlin</p>

                    <p><strong>Vertreten durch:</strong><br />
                    Marco Graul</p>

                    <h3>Kontakt</h3>
                    <p>Telefon: 015788804193<br />
                    E-Mail: mg-unternehmensberater@mailbox.org</p>

                    <h3>Umsatzsteuer-ID</h3>
                    <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
                    DE312071313</p>

                    <h3>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3>
                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                    <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
                </article>

            </div>
        </main>
    )
}
export default Impressum