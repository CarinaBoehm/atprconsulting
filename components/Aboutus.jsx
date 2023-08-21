import Header from "./Header";


function About() {

  return (
    
    <main className="about">

      <Header />

      <section className="section vorstellung">
        <article>
          <h3>Marco Graul</h3>
          <p>Dozent und Unternehmensberater</p>
          <ul>
            <li>Strategieberatung</li>
            <li>organizational Arrangements</li>
            <li>digitale Transformation</li>
            <li>Change-Management</li>
            <li>Organisation und Unternehmensführung</li>
          </ul>
        </article>
        {/* <article>
          <h3>Farshad Davoodifard</h3>
          <p>Dozent und Unternehmensberater</p>
          <ul>
            <li>Data Literacy</li>
            <li>Business Intelligence Analytics</li>
            <li>Microsoft Power BI</li>
          </ul>
        </article> */}
        <article>
          <h3>Dr. Jan Steyer</h3>
          <p>Dozent und Unternehmensberater</p>
          <ul>
            <li>Gründungsberatung</li>
            <li>Organisation und Unternehmensführung</li>
            <li>Strategieberatung</li>
          </ul>
        </article>
      </section>

      <section className="section aboutText">
      <p>
        Wir arbeiten seit vielen Jahren als Unternehmensberater und Dozenten. Die Verknüpfung von Lehre und Praxis ist unser Vorteil, denn sie generiert ein hinreichendes Problembewusstsein und damit ein besseres Verständnis für die betriebliche Wirklichkeit. Das, was uns als Problem benannt wird, wird von uns im vollen Verständnis für Komplexität und Interdependenz bearbeitet. Unsere Mitarbeit wird von kleinst-, klein- und mittelständischen Unternehmen wie auch von der öffentlichen Verwaltung nachgefragt. Beauftragungen sind durch Wunsch oder Not initiiert. Kurzfristiger Anpassungsbedarf betrieblicher Gegebenheiten oder strategischer Aufbau von dem, was als Vision erreichbar werden soll, adressiert unser Metier.
      </p>
      </section>

    </main>
  );
}

export default About;
