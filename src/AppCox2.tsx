import "./indexcox2.css"
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppCox2() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Chambers of Xeric Gear Progression Part 2
      </div>
          <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title="Mega Weapon Rebuilds"
        description="When buying Scythe, sell Lance. Bring defender for Guardians and for DWH.\nWhen buying Shadow, sell Eye and Ward."
      >
        <Row
          orderString="ralos"
          desc="Keep Ralos in any rebuild."
        />
        <Row
          orderString="rupture*"
          desc="Rupture provides additional max hits for BP and Tbow only when combined with a Dizana's Quiver.\nAssembler users should purchase Rupture only if no other upgrades remain."
        />
      </Section>
      <Section
        title="Shadow Rebuild"
        description="Keep highlighted gear when rebuilding."
      >
        <Row
          orderString="lance* & torture* & feros* & serp* & bmoont* & bmoonb*"
          colCount="6"
        />
        <Row
          orderString="tbp* & anguish* & atreads* & masorih* & masorit* & masorib*"
          colCount="6"
        />
        <Row
          orderString="shadow* & occult* & conflictions* & ancestralh* & virtust* & virtusb*"
          colCount="6"
        />
        <div className="line2"></div>
        <Row
          orderString="ancestralb > rancour > zvambs > rupture* > ancestralt > faceguard > torvah & torvat & torvab"
        />
      </Section>
      <Section
        title="Scythe Rebuild"
        description="Keep highlighted gear when rebuilding."
      >
        <Row
          orderString="scythe* & rancour* & feros* & faceguard* & bmoont* & bmoonb* & dboots*"
          colCount="7"
        />
        <Row
          orderString="tbp* & dcb* & anguish* & masorih* & masorit* & masorib*"
          colCount="6"
        />
        <Row
          orderString="ayak* & elid* & occult* & conflictions* & virtush* & virtust* & virtusb*"
          colCount="7"
        />
        <div className="line2"></div>
        <Row
          trail
          orderString="zvambs > ancestralh & elidf > rupture* > atreads"
        />
        <Row
          orderString="firecape* > ancestralt & ancestralb > torvah & torvat & torvab"
        />
        <Row
          orderString="infernalcape* > torvab > ancestralt & ancestralb > torvah & torvat"
        />
        <span className="textrow"></span>
        <Row
          orderString="infernalcape*"
          desc="Infernal capers can reach 48 Scythe max with 1 Torva piece instead of 3, making it worth obtaining sooner."
        />
      </Section>
      <Section
        title="Tbow Rebuild"
        description="Keep highlighted gear when rebuilding."
      >
        <Row
          orderString="lance* & torture* & feros* & serp* & bmoont* & bmoonb* & dboots*"
          colCount="7"
        />
        <Row
          orderString="tbp* & tbow* & anguish* & zvambs* & masorih* & masorit* & masorib*"
          colCount="7"
        />
        <Row
          orderString="ayak* & elidf* & occult* & conflictions* & ancestralh* & virtust* & virtusb*"
          colCount="7"
        />
        <div className="line2"></div>
        <Row
        orderString="rancour & faceguard & prims > rupture* > atreads > ancestralt & ancestralb > torvah & torvat & torvab"
        />
      </Section>
      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCoX prog work by toy Owner, Wes J, Chip Dump\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppCox2;
