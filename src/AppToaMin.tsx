import "./indextoamin.css"
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppToaMin() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Minimum Gear Requirements
      </div>
      <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title=""
        description=""
      >
        <Row
          orderString="zhasta-- > tbp-- > swamptrident-- > dds-- > ddef-- > dpick-- > dcb--"
        />
        <Row
          orderString="piety-- > torso-- > firecape-- > bringi-- > dboots-- > fury-- > bgloves--"
        />
        <Row orderString="keris-- > rpouch-- > nezzy-- > occult-- > bbarkt-- > bbarkb-- > saracapei-- "/>
        <Row orderString="bhidet-- > bhideb-- > assembler-- > botd-- "/>
        <span className="textrow"></span>
        <div className="grid-container">
          <div className="column">
            <Row
              orderString="attack*"
              desc="75"
              descClass="fs24 infodesc2"
            />
          </div>
          <div className="column">
            <Row
              orderString="strength*"
              desc="75"
              descClass="fs24 infodesc2"
            />
          </div>
          <div className="column">
            <Row
              orderString="defence*"
              desc="70"
              descClass="fs24 infodesc2"
            />
          </div>
          <div className="column">
            <Row
              orderString="ranged*"
              desc="75"
              descClass="fs24 infodesc2"
            />
          </div>
          <div className="column">
            <Row
              orderString="magic*"
              desc="78"
              descClass="fs24 infodesc2"
            />
          </div>
          <div className="column">
            <Row
              orderString="prayer*"
              desc="70"
              descClass="fs24 infodesc2"
            />
          </div>
        </div>
        <span className="textrow"></span>
        <span className="textrow"></span>
      </Section>
    </>
  );
}

export default AppToaMin;
