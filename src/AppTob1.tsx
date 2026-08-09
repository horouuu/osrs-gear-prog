import "./indextob1.css"
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppTob1() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Theatre of Blood Gear Progression Part 1
      </div>
          <span className="textrow">updated as of 4 August 2026</span>
      <Section
        title="Minimum Requirements"
        description="For reference, this is a copy of the min required gear to raid in WDR.\nRefer to !tobmin and #tob-gear-advice to double check requirements."
      >
        <Row orderString="voidmelee-- > voidrange-- > voidmage-- > voidtopelite-- > voidbotelite-- > voidgloves-- > piety-- > rigour-- > augury--"/>
        <Row orderString="fcape-- > assembler-- > saracapei-- > torture-- > anguish-- > occult-- > tent-- > tbp-- > swamptrident--"/>
        <Row orderString="salvee-- > ddef-- > bgs-- > chalberd-- > dboots-- > bringi-- > rpouch-- > botd--"/>
      </Section>

      <Section
        title="Pre-Scythe Progression"
        description="Start from the left and follow the order.\nRemember that combat stats are almost always more important than gear."
      >
        <Row
          trail
          orderString="dclaws & chalberd > dwh & bgs > fang > tobroletier1 > rancour $ torture"
        />
        <Row
          orderString="tobstrtier2 $ fang > ultor > blade > ayak* > sra*"
        />
        <span className="textrow"></span>
        <Row
          orderString="blade*"
          desc="Do not corrupt if non-iron."
        />
        <Row
          orderString="ayak*"
          desc="Freezers should purchase all tier 2 freeze gear, which includes Eye.\nApply the same logic during rebuilds."
        />
        <Row
          orderString="sra*"
          desc="NOT RECOMMENDED IN GENERAL FOR TOB.\nRead !sra before purchasing."
        />
      </Section>
      <Section
        title="Scythe Rebuild"
        description=""
      >
        <Row
          orderString="scythe* & bgs* & chalberd*"
          desc="Minimum gear when rebuilding."
        />
        <Row
          orderString="tobstrtier1 > dclaws & chalberd > dwh & bgs > tobroletier1 > tobstrtier2 > ayak > tobstrtier3 > tobfrztier3"
        />
      </Section>
      <Section
        title="Scythe + Tbow Rebuild"
        description=""
      >
        <Row
          orderString="scythe* & tbow* & bgs* & chalberd* & tobstrtier1* & tobfrztier1*"
          desc="Minimum gear when rebuilding."
          colCount="6"
        />
        <Row
          trail
          orderString="dclaws & chalberd > dwh & bgs > tobstrtier2 > tobroletier1 > tobstrtier3"
        />
        <Row
          orderString="ayak > emaul > zcb > tobfrztier3 > atreads"
        />
      </Section>
      <Section
        title="Role Specific Gear and Strength Gear"
        description="See next page.\nPurchase listed items from left->right."
      />
      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppTob1;
