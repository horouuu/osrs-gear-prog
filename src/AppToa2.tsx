import './indextoa2.css'
import "./AppNoSidePadding.css";
import Row from "./components/Row";
import Section from "./components/Section";

function App2() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression Notes
      </div>
          <span className="textrow">updated as of 9 August 2026</span>
          <span className="textrow">For more information, consult ToA advice channels.</span>

      <div className="grid-container">
        <div className="column">
          <Section
            title="Situational Purchases"
            description="Not recommended in general for ToA, but can have uses."
          >
            <Row
              leftAlign
              orderString="bonedagger*"
              desc="Useful for very high level raids with OD. Worse than BGS otherwise."
            />
            <Row
              leftAlign
              orderString="seercull*"
              desc="Acceptable spec weapon if shadowing Zebak in solo and no ZCB."
            />
            <Row
              leftAlign
              orderString="sang*"
              desc="Noticeably worse than Eye for Wardens p3, and quickly obsoleted in gear progression.\nSang can still be used if there is a strong external reason to favour it."
            />
            <Row
              leftAlign
              orderString="elidf*"
              desc="By the time this is a consideration, Shadow rebuild should be close.\nCan be purchased if primarily a ToB freezer."
            />
            <Row
              leftAlign
              orderString="fbow*"
              desc="READ !bowfa BEFORE PURCHASING. DO NOT CORRUPT IF NON-IRON.\nRecommended temporarily for pursuing cape upgrades.\nCan be useful at 450+ raid level pre-Shadow to replace certain range/mage gear."
            />
            <Row
              leftAlign
              orderString="dclaws*"
              desc="Can be useful in solo speedruns for Akkha shadows."
            />
          </Section>
          <Section
            title="Keris Partisan Upgrades"
            description="None of these are worth bringing for DPS if you have Fang."
          >
            <Row
              leftAlign
              orderString="kerisb*"
              desc="Replaces Hasta or below as a primary stab weapon."
            />
            <Row
              leftAlign
              orderString="kerisu*"
              desc="Best-in-slot against Kephri minions.\nCan beat Fang against Kephri at low raid levels."
            />
            <Row
              leftAlign
              orderString="kerisy*"
              desc="For 400+ raid level with dehydration enabled. !yellowkeris"
            />
            <Row
              leftAlign
              orderString="kerisr*"
              desc="For advanced team speedruns. Not needed for CA time."
            />
          </Section>
          <Section
            title="Tbow-based Setups"
            description="For those with a Tbow and no Shadow."
          >
            <Row
              leftAlign
              orderString="tbow*"
              desc="You must use BP and/or Eye on Akkha and Obelisk. Tbow will be used at Zebak and Wardens p2-p4.\nPrioritize Masori over mage gear in item progression. Do NOT neglect ZCB.\nSell Masori for Shadow rebuild unless needed elsewhere."
            />
          </Section>
        </div>
        <div className="column">
          <Section
            title="Bad Purchases"
            description="Notable items to avoid purchasing for ToA."
          >
            <Row
              leftAlign
              orderString="bfury*"
              desc="Waste of money, unnecessary healing and worse dps than Rancour."
            />
            <Row
              leftAlign
              orderString="atlatl*"
              desc="Worse than (min req) BP in dps and unusable for Kephri swarming.\nArmour set is likewise not recommended to try to save space with."
            />
            <Row
              leftAlign
              orderString="accursed*"
              desc="Mediocre accuracy spec with marginal impact for Shadow outside of Zebak.\nIf not using ZCB, Seercull/Eye specs are often preferable."
            />
            <Row
              leftAlign
              orderString="oathh* & oatht* & oathb*"
              desc="Only increases BGS accuracy.\nCan be used with Scythe for Fancy Feet CA."
            />
          </Section>
          <Section
            title="Untradeable Upgrades"
            description="Recommended to obtain before or while doing ToA."
          >
            <Row
              leftAlign
              orderString="infernalcape* & quiver*"
              desc="Recommended to obtain once you have at least a Bow of Faerdhinen.\nVisit #inferno and #colosseum for advice."
            />
            <Row
              leftAlign
              orderString="& mysticv*"
              desc="No max hit loss with current max setups compared to Augury, but with half the prayer drain.\nAugury should still be used if shadowing Zebak as the accuracy difference is significant."
            />
            <Row
              leftAlign
              orderString="& deathcharge*"
              desc="Double death charge is highly useful against Ba-Ba and Kephri in particular."
            />
          </Section>
          <Section
            title="Miscellaneous"
            description=""
          >
            <Row
              leftAlign
              orderString="surgepot*"
              desc="Recommended once proficient with raid basics. !toasurge"
            />
            <Row
              leftAlign
              orderString="blackchin*"
              desc="Can be useful for tagging Ba-Ba baboons and Kephri swarms, particularly triples at path level 2 and higher."
            />
            <Row
              leftAlign
              orderString="horn* & dwh*"
              desc="In team raids, this combination is preferred over BGS/Ralos."
            />
          </Section>
        </div>
      </div>

      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCurrent revision created by DreamingNote\nCurrent revision input from Peekays, VladG123, toy Owner, HatiHroovit, Toa Scaler"
      />
    </>
  );
}

export default App2;
