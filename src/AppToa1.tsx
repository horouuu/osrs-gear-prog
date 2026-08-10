import './indextoa1.css'
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppToa1() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression
      </div>
          <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title="Minimum Requirements"
        description="For reference, this is a copy of the min required gear to raid in WDR.\nRefer to !toamin and #toa-gear-advice to double check requirements."
      >
        <Row
          orderString="zhasta-- > tbp-- > swamptrident-- > dds-- > ddef-- > dpick-- > dcb--"
        />
        <Row
          orderString="piety-- > torso-- > firecape-- > bringi-- > dboots-- > fury-- > bgloves--"
        />
        <Row
          orderString="keris-- > rpouch-- > nezzy-- > occult-- > bbarkt-- > bbarkb-- > saracapei-- "
        />
        <Row
          orderString="bhidet-- > bhideb-- > assembler-- > botd-- "
        />
      </Section>
    
      <Section
        title="Core Upgrades"
        description="Start from the left and follow the order.\nRemember that combat stats are almost always more important than gear."
      >
        <Row
          orderString="fang > lb & bgs > rigour > buckler > anguish > bclaws > feros > serp > torm"
        />
      </Section>

      <Section
        title="Secondary Upgrades"
        description="Sell items in red to buy the items below them."
      >
        <Row
          trail
          orderString="masorih & masorit & masorib > ayak > mbook > conflictions $ torm > vw $ bclaws > torture"
        />
        <Row
          orderString="rancour $ torture > augury > virtush & virtust & virtusb > bmoonb > faceguard > prims"
        />
      </Section>

      <Section
        title="Shadow Rebuild"
        description="Sell every secondary upgrade for Shadow if possible."
      >
        <Row
          orderString="shadow* & saracapei* & occult* & torm* & virtush* & bbarkt* & bbarkb* & eternals*"
          desc="Minimum mage gear when rebuilding."
          colCount="4"
        />
        <Row
          trail
          orderString="magus > conflictions $ torm > virtust & virtusb > vw $ bclaws > ancestralh & ancestralb $ virtush & virtusb"
        />
        <Row
          orderString="torture > rancour $ torture > bmoonb > faceguard > prims > masorih & masorit & masorib"
        />
      </Section>
      <Section
        title="Shadow + ZCB Rebuild"
        description="Sell secondary melee and range upgrades for ZCB. Do NOT sell mage gear."
      >
        <Row trail orderString="shadow* & zcb*" />
        <Row
          orderString="ancestralt & atreads $ magus & virtust > vw $ bclaws > torture > rancour $ torture > bmoonb > faceguard > avernic > masorih & masorit & masorib"
        />
      </Section>
      <Section
        title="Tertiary Upgrades"
        description="Only to be considered after all prior upgrades.\nDo NOT sell mage gear or ZCB for any of these items, including the Twisted Bow.\nConsult ToA advice channels for more information on these upgrades."
      >
        <Row
          orderString="ayak-- > tbow-- > rupture-- > zvambs-- > ralos--"
        />
        <Row
          orderString="ultor-- > torvah-- > torvat-- > torvab-- > rapier--"
        />
      </Section>

      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCurrent revision created by DreamingNote\nCurrent revision input from Peekays, VladG123, toy Owner, HatiHroovit, Toa Scaler"
      />
    </>
  );
}

export default AppToa1;
