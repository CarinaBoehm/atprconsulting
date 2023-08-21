import { Router } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";

function Seminare() {


  return (
    <main className="seminare">

      <div className="eyecatcher">
        <Header/>
        <h1 className="headline">Unsere Seminarangebote</h1>
        <button><Link to="/contact"></Link> Kontakt</button>
      </div>
      
      <section className="section seminareOne">
      <p>
        Bildung stärkt die eigene Position, macht Aufstieg möglich und empfiehlt
        für den nächsten Job! Sie schafft aber weit mehr als diese Perspektive.
        Qualifikation schenkt Anerkennung und Zufriedenheit, unabdingbare
        Aspekte also, die auf Engagement und Leistungswillen der Arbeitnehmer
        positiv wirken. Und davon profitiert das Unternehmen bzw. die
        Organisation als Ganzes. Besser (aus-)gebildetes und motivierteres
        Personal ist essenziell für Erfolg, für Auf- und Ausbau von
        Wettbewerbsvorteilen. Der unmittelbare, individuelle Vorteil und die
        daran geknüpften kollektiven Effekte begünstigen eine
        Organisationskultur, die letztlich (unternehmerische) Chancen verbessern
        und Risiken minimieren kann. Zugleich steigt mit diesem hier
        skizzierten, evidenten Komplex das Rekrutierungspotential der
        Organisation, denn ein guter Arbeitgeber ist selten und das spricht sich
        rum. Bildung ist somit nicht als Kostenposition zu begreifen, sondern
        als Investition, die strategisch Erfolg und Gewinn absichern und aufbauen kann.
      </p>
      </section>

      <section className="section seminarTwo">
        <article className="offers IT">
          <h3>Fachbereich IT</h3>
          <div className="line"/>
          <table>
          <tr>
            <td><Link to="/glossar" className="links" >Data Literacy and Artificial Intelligence</Link>  </td>
            {/* <td> .-€</td> */}
          </tr>
          <tr>
            <td><Link to="/glossar" className="links">Business Intelligence Analytics mit Microsoft Power BI</Link> </td>
            {/* <td> .-€</td> */}
          </tr>
          <tr>
            <td><Link to="/glossar" className="links">Big Data Management and Cloud Computing</Link> </td>
            {/* <td> .-€</td> */}
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
        </article>
        <article className="offers Bwl">
          <h3>Fachbereich Betriebs- und Volkswirtschaft</h3>
          <div className="line"/>
          <table>
            <tr>
              <td>Kundenorientierung</td>
              {/* <td>345€</td> */}
            </tr>
            <tr>
              <td>Digitale Transformation</td>
              {/* <td>.-€</td> */}
            </tr>
            <tr>
              <td>Change-Management</td>
              {/* <td>475€</td> */}
            </tr>
            <tr>
              <td>Unternehmensführung</td>
              {/* <td>470€</td> */}
            </tr>
            <tr>
              <td>Einführung in das externe Rechnungswesen</td>
              {/* <td>190,40€</td> */}
            </tr>
            <tr>
              <td>Einführung in die Kosten- und Leistungsrechnung</td>
              {/* <td>.-€</td> */}
            </tr>
            <tr>
              <td>Fortbildung zum Officer for Digital Transformation</td>
              {/* <td>325€</td> */}
            </tr>
            <tr>
              <td>Preise auf Anfrage</td>
            </tr>

          </table>
        </article>
      </section>

    </main>
  );
}

export default Seminare