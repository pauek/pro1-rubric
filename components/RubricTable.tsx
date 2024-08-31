import { backgroundColors, textColors } from "@/lib/params";
import { cn } from "@/lib/utils";

export default async function RubricTable() {
  return (
    <div className="m-4">
      <table className="border border-black border-collapse" id="rubric">
        <thead>
          <tr>
            <th className="text-left">Aspecte</th>
            <th>0 &ndash; 2</th>
            <th>2 &ndash; 4</th>
            <th>4 &ndash; 6</th>
            <th>6 &ndash; 8</th>
            <th>8 &ndash; 10</th>
          </tr>
          <tr>
            <td className={textColors.C}>Correctesa</td>
            <td>
              <h4>El programa té molt poques sortides correctes</h4>
              <p>
                No passa cap joc de prova del Jutge. La inspecció manual
                confirma errors de concepte greus que fan que el programa no
                funcioni.
              </p>
              <p>
                El programa s&apos;ha fet produïnt les sortides una a una sense
                calcular-les com es demana.
              </p>
            </td>
            <td>
              <h4>El programa té moltes sortides incorrectes</h4>
              <p>
                El programa té sortides correctes, però la solució escollida no
                permetria resoldre la resta de cassos a tractar.
              </p>
            </td>
            <td>
              <h4>El programa té poques sortides incorrectes</h4>
              <p>
                Passa la majoria de jocs de prova del Jutge. L&apos;algorisme
                escollit és adequat, però hi ha errors en la implementació que
                costarien de subsanar.
              </p>
            </td>
            <td>
              <h4>El programa té una sortida incorrecta</h4>
              <p>
                Passa tots els jocs de prova del Jutge. Malgrat això, la
                correcció manual troba algun error que el Jutge no ha detectat
                (un cas particular de les entrades a on la sortida no és
                l&apos;esperada).
              </p>
            </td>
            <td>
              <h4>El programa és correcte</h4>
              <p>
                Passa tots els jocs de prova del Jutge i la correcció manual
                confirma la correctesa de la solució.
              </p>
            </td>
          </tr>
          <tr>
            <td className={textColors.S}>Simplicitat</td>
            <td>
              <h4>
                El programa arriba a la solució d&apos;una forma molt complicada
              </h4>
              <p>
                La implementació aplica conceptes innecessaris que no aporten
                res i fan el programa molt més llarg del necessari.
              </p>
              <p>
                S&apos;utilitza <code>string</code> o<code>vector</code> quan no
                és necessari.
              </p>
              <p>Gairebé cada instrucció o expressió es podria simplificar.</p>
            </td>

            <td>
              <h4></h4>
              <p></p>
            </td>
            <td>
              <p>
                La implementació és raonable, però hi ha repetició molt clara
                degut a manca de funcions o bé condicions que no capturen la
                regularitat.
              </p>
            </td>
            <td>
              <p></p>
            </td>
            <td>
              <p>
                El codi implementa l&apos;algorisme escollit en el mínim
                d&apos;operacions. Totes les instruccions són les seves versions
                més senzilles i es detecta la intenció de fer el codi molt
                directe.
              </p>
            </td>
          </tr>
          <tr>
            <td className={textColors.L}>Llegibilitat</td>
            <td>
              <h4>
                L&apos;esforç necessari per entendre el programa és enorme.
              </h4>
              <p>
                El codi és indesxifrable. El format és atzarós i desordenat, els
                noms de variables no representen el que contenen, i no hi ha
                funcions ni comentaris enlloc. L&apos;esforç per entendre el
                programa és enorme.
              </p>
            </td>
            <td>
              <h4>L&apos;esforç necessari per entendre el programa és alt.</h4>
              <p>
                El format és raonable (malgrat alguns detalls), però els noms de
                variables són d&apos;una lletra i no ajuden gens a entendre el
                codi. Tampoc hi ha comentaris per aclarir-ho.
              </p>
            </td>
            <td>
              <h4>
                L&apos;esforç necessari per entendre el programa és mitjà.
              </h4>
              <p>
                El format és correcte, i alguns noms de variables són més
                llargs, però els noms no acaben de reflectir la funció que fan i
                això crea confusió. Malgrat això, hi ha alguns comentaris que
                ajuden a aclarir la idea subjacent.
              </p>
            </td>
            <td>
              <h4>L&apos;esforç necessari per entendre el programa és baix.</h4>
              <p>
                El format és correcte i els noms de variables són adequats. La
                partició del problema en funcions és raonable. Hi ha algun
                aspecte que es podria treballar més.
              </p>
            </td>
            <td>
              <h4>
                L&apos;esforç necessari per entendre el programa és mínim.
              </h4>
              <p>
                El format és perfecte, els noms de variables estan molt ben
                pensats perquè el lector interpreti correctament el que
                s&apos;està fent. La partició en funcions és òptima pel problema
                i fa les funcions reaprofitables.
              </p>
            </td>
          </tr>
          <tr>
            <td className={textColors.E}>Eficiència</td>
            <td>
              <h4>
                El programa fa moltíssimes més operacions de les necessàries.
              </h4>
              <p>
                El programa no passa els jocs de prova específics
                d&apos;eficiència al Jutge, o bé en la correcció manual es
                detecta que el codi realitza moltes més operacions de les
                necessàries per resoldre el problema.
              </p>
              <p>Per exemple: fer un recorregut quan es pot fer una cerca.</p>
            </td>
            <td></td>
            <td>
              <h4>L&apos;algorisme fa algunes operacions innecessàries.</h4>
              <p>
                El programa passa els jocs de prova específics
                d&apos;eficiència, malgrat la correcció manual detecta que es
                podrien fer menys operacions, degut a repetició de càlculs o
                expressions.
              </p>
            </td>
            <td></td>
            <td>
              <h4>
                L&apos;algorisme triat fa el mínim número d&apos;operacions per
                resoldre el problema.
              </h4>
              <p>
                El programa passa els jocs de prova sobre eficiència i la
                correcció manual confirma que el programa realitza pràcticament
                el mínim número d&apos;operacions per obtenir el resultat
              </p>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
