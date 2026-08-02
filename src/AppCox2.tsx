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
          <span className="textrow">updated as of 2 August 2026</span>
      <Section
        title="Mega Weapon Rebuilds"
        description="When buying Scythe, sell Lance. Bring defender for Guardians and for DWH.\nWhen buying Shadow, sell Eye and Ward."
      />
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
          orderString="shadow* & occult* & cgaunts* & ancestralh* & virtust* & virtusb*"
          colCount="6"
        />
        <div className="line2"></div>
        <Row
          trail
          orderString="ancestralb > rancour > zvambs > ancestralt > fg"
        />
        <Row
          orderString="assembler* > torvah & torvat & torvab > rupture"
        />
        <Row
          orderString="quiver* > rupture > torvah & torvat & torvab"
        />
      </Section>
      <Section
        title="Scythe Rebuild"
        description="Keep highlighted gear when rebuilding."
      >
        <Row
          orderString="scythe* & rancour* & feros* & fg* & bmoont* & bmoonb* & dboots*"
          colCount="7"
        />
        <Row
          orderString="tbp* & anguish* & masorih* & masorit* & masorib*"
          colCount="5"
        />
        <Row
          orderString="ayak* & elid* & occult* & cgaunts* & virtush* & virtust* & virtusb*"
          colCount="7"
        />
        <div className="line2"></div>
        <Row
          orderString="zvambs > ancestralh & elidf > atreads > torvah & torvat & torvab > rupture"
        />
      </Section>
      <Section
        title="Tbow Rebuild"
        description="Keep highlighted gear when rebuilding."
      >
        <Row
          orderString="lance* & torture* & feros* & serp* & bmoont* & bmoonb*"
          colCount="6"
        />
        <Row
          orderString="tbp* & tbow* & anguish* & zvambs* & masorih* & masorit* & masorib*"
          colCount="7"
        />
        <Row
          orderString="ayak* & elid* & occult* & cgaunts* & virtush* & virtust* & virtusb*"
          colCount="7"
        />
        <div className="line2"></div>
        <Row
        orderString="rancour & fg & prims > atreads > ancestralt & ancestralb > torvat & torvab > rupture > torvah"
        />
      </Section>
      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCoX prog work by Wes J, Chip Dump, toy Owner\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppCox2;
