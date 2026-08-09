import "./indexcoxmin.css"
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppCoxMin() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Chambers of Xeric Minimum Gear Requirements
      </div>
      <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title=""
        description=""
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

export default AppCoxMin;
