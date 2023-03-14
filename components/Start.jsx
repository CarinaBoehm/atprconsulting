import React from "react";
import Header from "./Header";
import Slideshow from "./Slideshow";
import { Link } from "react-router-dom";

function Start() {
  return (
    <main className="start">
      <div className="eyecatcher">
        <Header />
        <div className="headline">
          <h3>Das können wir wirklich gut:</h3>
          <h1>Beratung und Seminare</h1>
        </div>
        <Link to="/contact"><button>Kontakt </button></Link>
      </div>

      <section className="section startOne">
        <article>
          <h3>
            Studien und Praxis machen es offenkundig: Für die erfolgreiche
            Etablierung und Nachhaltigkeit von Verbesserung und Wandel braucht
            es ein Ineinandergreifen beider Komponenten.
          </h3>
          <p>
            Seminare geben Anlass und Impuls für betrieblich konkrete
            Anwendungen. Wissensvermittlung ist in diesem Sinne Teil des
            betrieblichen kontinuierlichen Verbesserungsprozesses und damit
            letztlich auch Befähigung und Weg hin zur lernenden Organisation.
            Unser Verständnis von Beratung ist eines, das nicht von außen
            erzwingt, sondern das befähigt.
          </p>
        </article>
      </section>

      {/* <div className="trans"></div> */}

      <Slideshow/>


      {/* <div className="trans"></div> */}

      <section className="section startThree">
        <p>
          Themen werden auf die Agenda gehoben, die verzerrt durch
          Kommunikation, Wollen und Können der Vortragenden, nicht selten das
          verfehlen, was tatsächlich Grund und Ansatz zur Verbesserung gäbe.
          Narrative, Erwartungen und Rollenzuschreibungen verengen den Blick und
          erzwingen niederschwellig eine Konformität im Diskurs. Die Folge:
          Probleme und Perspektiven werden verkannt und Lösungen erratisch
          konstruiert. Wir wissen um diese systemischen Momente. Und hier
          bleiben wir nicht abstrakt, sondern gestalten mit denen, die
          tagtäglich unmittelbar leisten und abliefern. Deren Know-how bleibt
          für Akzeptanz und für den richtigen Weg unerlässlich. Bei aller
          Instrumenten- und Methodensicherheit, die nur allzu gerne als allein
          erfolgsversprechend eingefordert und angeboten ist, bleibt die
          essentielle Frage darüber, welche Inputs gebraucht und welche wie wann
          tatsächlich genutzt werden, nicht selten im Abseits. Zudem wird ein
          nachhaltiger Erfolg nur möglich, wenn abseits aller
          (verwaltungs-)technischen Belange die Unternehmenskultur entsprechende
          Berücksichtigung finden kann. Eine Tatsache, die insbesondere für die
          digitale Transformation als erfolgskritisch erkannt ist.
        </p>
      </section>

    </main>
  );
}

export default Start;
