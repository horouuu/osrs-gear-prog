import "./indexcox1.css"
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppCox1() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Chambers of Xeric Gear Progression Part 1
      </div>
          <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title="Minimum Requirements"
        description="For reference, this is a copy of the min required gear to raid in WDR.\nRefer to !coxmin and #cox-gear-advice to double check requirements."
      >
        <Row orderString="torso-- > firecape-- > ddef-- > tent-- > lb-- > dpick-- > salveei-- > swamptrident--"/>
        <Row orderString="piety-- > nezzy-- > dboots-- > bgloves-- > fury-- > bhidet-- > bhideb-- > assembler-- "/>
        <Row orderString="dcb-- > tbp-- > bgs-- > dsword-- > rpouch-- "/>
        <span className="textrow"></span>
        <Row
          orderString="saracapei & occult & bbarkt & bbarkb & mysticm"
          desc="Your mage gear must achieve at least 11% magic damage. This is the cheapest bundle."
          colCount="5"
        />
      </Section>

      <Section
        title="Pre-Mega Progression"
        description="Start from the left and follow the order.\nRemember that combat stats are almost always more important than gear."
      >
        <Row
          trail
          orderString="78herb > sang & elid & botd > rigour > augury > buckler > anguish > torm"
        />
        <Row
          trail
          orderString="macuahuitl & bmoonh & bmoont & bmoonb > lance & nezzy $ macuahuitl & bmoonh > dhcb > ayak $ mirrorsang > serp > feros & torture"
        />
        <Row
          trail
          orderString="masorih & masorit & masorib > ralos & dcb $ dhcb > conflictions $ torm > virtush & virtust & virtusb $ buckler > zvambs"
        />
        <span className="textrow"></span>
        <Row
          orderString="dhcb*"
          desc="Read !dcb when selling DHCB."
        />
        <div className="line2"></div>
        <span className="textrow">Option 1</span>
        <Row
          orderString="ancestralh & elidf > rancour & prims & faceguard > rupture* > atreads > ancestralt & ancestralb"
        />
        <Row
          leftAlign
          orderString=""
          desc="This path is better value for money, as Ward (f) provides a considerable boost to Eye that outweighs the extra BP max hit gained from early Treads."
        />
        <span className="textrow">Option 2</span>
        <Row
          orderString="ancestralh & atreads > rancour & faceguard > rupture*"
        />
        <Row
          leftAlign
          orderString=""
          desc="If you do not have the required levels to smith the fortified Ward, Treads and regular Ward are the next best substitute. Apply the same approach to Scythe/Tbow rebuilds."
        />
        <span className="textrow"></span>
        <Row
          orderString="rupture*"
          desc="Rupture provides additional max hits for BP and Tbow only when combined with a Dizana's Quiver.\nAssembler users should purchase Rupture only if no other upgrades remain."
        />
      </Section>

      <Section
        title="Mega Rebuilds"
        description="Recommended to acquire megas in the following order for CoX. See !coxrebuilds for individual rebuild progs.\nCan choose differently based on other content priorities."
      >
        <Row
          orderString="shadow* > scythe* > tbow*"
        />
        <Row
          orderString="ralos"
          desc="Keep Ralos in any rebuild."
        />
      </Section>
      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCoX prog work by toy Owner, Wes J, Chip Dump\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppCox1;
