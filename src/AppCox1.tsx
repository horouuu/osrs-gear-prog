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
          <span className="textrow">updated as of 2 August 2026</span>
      <Section
        title="Minimum Requirements"
        description="This is a convenience copy of WDR's minimum requirements to raid.\nRefer to !coxmin and #cox-gear-advice to double check requirements."
      >
        <Row orderString="torso-- > fcape-- > ddef-- > tent-- > lb-- > dpick-- > salveei-- > swamptrident--"/>
        <Row orderString="piety-- > nezzy-- > dboots-- > bgloves-- > fury-- > bhidet-- > bhideb-- > assembler-- "/>
        <Row orderString="dcb-- > tbp-- > bgs-- > dsword-- > rpouch-- "/>
        <span className="textrow"></span>
        <Row
          orderString="saracapei & occult & bbarkt & bbarkb & mysticm"
          desc="Your mage gear must achieve at least 11% magic strength. This is the cheapest bundle."
          colCount="5"
        />
      </Section>

      <Section
        title="Pre-Mega Progression"
        description="Start from the left and follow the order.\nRemember that combat stats are almost always more important than gear."
      >
        <Row
          trail
          orderString="78herb > sang & elid & botd > rigour > augury > buckler > anguish > torms"
        />
        <Row
          trail
          orderString="macuahuitl & bmoonh & bmoont & bmoonb > lance & nezzy $ macuahuitl & bmoonh > dhcb > ayak $ mirrorsang > serp > feros & torture"
        />
        <Row
          trail
          orderString="masorih & masorit & masorib > ralos $ dhcb > cgaunts $ torms > virtush & virtust & virtusb $ buckler > zvambs"
        />
        <Row
          orderString="dhcb*"
          desc="Read !dhcb when selling DHCB."
        />
        <div className="line2"></div>
        <Row
          orderString="ancestralh & elidf > rancour & prims & fg > atreads > rupture*"
          desc="The value of Ward (f) for Eye outweighs the value of Treads, even considering the BP max hit gained."
        />
        <Row
          orderString="ancestralh & atreads > rancour & fg > rupture*"
          desc="If you do not have the required levels to smith the fortified Ward, follow this progression path instead."
        />
        <Row
          orderString="rupture*"
          desc="Without a Dizana's quiver, the Amulet of Rupture does not add BP max hits."
        />
      </Section>

      <Section
        title="Mega Rebuild Order"
        description="Recommended to acquire megas in the following order for CoX.\nCan choose differently based on other content priorities."
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
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCoX prog work by Wes J, Chip Dump, toy Owner\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppCox1;
