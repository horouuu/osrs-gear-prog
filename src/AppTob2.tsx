import "./indextob2.css"
import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppTob2() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Theatre of Blood Gear Progression Part 2
      </div>
          <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title="Strength Gear"
        description="For ToB, melee accuracy is considered valuable on odd max hit thresholds with Scythe due to its max hit rounding property.\ne.g. 48 with Oath is considered better than 49 without it, but 50 without Oath beats 49 with it.\nPlease note that Scythe max hit breakpoints are customarily calculated with the assumption of having an Infernal Cape.\nFire capers will have to make additional adjustments/sacrifices, which will be noted below."
      />
      <Section
        title="Strength Gear Tier 1 (48 Scythe max)"
        description="Tier 1 melee strength gear is mostly valuable with a Scythe.\nPre-Scythe, void is extremely competitive for the space gained."
      >
        <Row
          orderString="feros-- > torso-- > bmoonb-- > faceguard-- > ultor--*"
        />
        <Row
          orderString="ultor* & firecape*"
          desc="Fire capers are required to additionally purchase Ultor to obtain 48 max."
        />
      </Section>
      <Section
        title="Strength Gear Tier 2 (48 Scythe Max)"
        description=""
      >
        <Row
          orderString="feros-- > oatht-- > oathb-- > serp-- > rancour-- > ultor--*"
          desc="Option 1"
        />
        <Row
          orderString="feros-- > oatht-- > oathb-- > oathh-- > torture-- > ultor--*"
          desc="Option 2"
        />
        <Row
          orderString="ultor* & firecape*"
          desc="See tier 1 strength gear notes."
        />
      </Section>
      <Section
        title="Strength Gear Tier 3 (50 Scythe Max)"
        description=""
      >
        <Row
          orderString="rancour-- > ultor-- > prims-- > torvah-- "
        />
        <Row
          orderString="firecape*"
          desc="Fire capers currently cannot obtain 50 Scythe Max without full Torva.\nInstead, they should use full Oathplate."
        />
      </Section>
      <Section
        title="Role-Specific Gear Tier 1"
        description="Freezer tier 1 gear is also included here."
      >
        <Row
          orderString="tsotd > fbrew > elid"
          desc="Freeze Role (do not bring Ward unless you have Scythe)"
        />
        <Row
          orderString="sulphurblades-- > macuahuitl--"
          desc="Melee Role (either item works)"
        />
        <Row
          orderString="blackchin & buckler"
          desc="Range Role"
        />
      </Section>
      <Section
        title="Freezer Gear Tier 2"
      >
        <Row
          orderString="conflictions > ayak > virtust > elid"
        />
        <Row
          orderString="virtusb*"
          desc="Mage bottom is unnecessary with forgotten brew boost."
        />
      </Section>
      <Section
        title="Freezer Gear Tier 3"
      >
        <Row
          orderString="elidf > satheart > ralos > kodai"
        />
        <Row
          orderString="atreads*"
          desc="With Treads, mage top is no longer necessary for freeze threshold."
        />
      </Section>
      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppTob2;
