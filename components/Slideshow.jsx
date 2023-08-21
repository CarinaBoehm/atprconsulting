import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

function Slideshow() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    
  return(
    <section className="startTwo">

            <AutoplaySlider className='slider' play={true} 
                cancelOnInteraction={false} // should stop playing on user interaction 
                interval={6000}
                >

                <div>
                Wir beraten und unterstützen, damit Ihre Ideen Wirklichkeit
                werden.
                </div>

                <div>
                Gemeinsame Konzeptionierung und Realisation von Verbesserung und
                Geschäftsmodellen.
                </div>

                <div>
                Wir etablieren und korrigieren Prozesse und Strukturen bis hin zur
                Funktionsreife.
                </div>

                <div>
                Jeder wird mitgenommen, denn Erfolg ist entscheidend vom
                Engagement aller abhängig.
                </div>

                <div>
                Seminare eröffnen Perspektiven. Sie sind Impuls für Veränderung
                und Anker für die Absicherung des Erreichten.
                </div>

                <p>Wir helfen in der Not.</p>

            </AutoplaySlider>
    </section>
  )
}
export default Slideshow