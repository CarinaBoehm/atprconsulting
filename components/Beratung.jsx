import Header from "./Header";

function Beratung() {
  return (
    <main className="beratung">
      <div className="eyecatcher">
        <Header />
        <h2 className="headline">Lassen Sie sich von uns beraten</h2>
        <button>Kontakt</button>
      </div>
      <div className="section beratungOne">
        <p>
            Themen werden auf die Agenda gehoben, die verzerrt durch Kommunikation,
            Wollen und Können der Vortragenden, nicht selten das verfehlen, was
            tatsächlich Grund und Ansatz zur Verbesserung gäbe. Narrative,
            Erwartungen und Rollenzuschreibungen verengen den Blick und erzwingen
            niederschwellig eine Konformität im Diskurs. Die Folge: Probleme und
            Perspektiven werden verkannt und Lösungen erratisch konstruiert. Wir
            wissen um diese systemischen Momente. Und hier bleiben wir nicht
            abstrakt, sondern gestalten mit denen, die tagtäglich unmittelbar
            leisten und abliefern. Deren Know-how bleibt für Akzeptanz und für den
            richtigen Weg unerlässlich. Bei aller Instrumenten- und
            Methodensicherheit, die nur allzu gerne als allein erfolgsversprechend
            eingefordert und angeboten ist, bleibt die essentielle Frage darüber,
            welche Inputs gebraucht und welche wie wann tatsächlich genutzt werden,
            nicht selten im Abseits. Zudem wird ein nachhaltiger Erfolg nur möglich,
            wenn abseits aller (verwaltungs-)technischen Belange die
            Unternehmenskultur entsprechende Berücksichtigung finden kann. Eine
            Tatsache, die insbesondere für die digitale Transformation als
            erfolgskritisch erkannt ist.
        </p>
      </div>
    </main>
  );
}
export default Beratung;
