import "./indexcox3.css"
import "./AppNoSidePadding.css";
import Row from "./components/Row";
import Section from "./components/Section";

function AppCox3() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
          Chambers of Xeric Gear Progression Notes
      </div>
          <span className="textrow">updated as of 9 August 2026</span>
      <Section
        title=""
        description="The gear progression chart is geared towards the most common type of raid in WDR (unalted 3+4s with TMG/MTM scouts).\nIf you are interested in other types of raids, particularly solos and/or CMs, gear progression can differ substantially.\nSome of those differences will be mentioned here. For more information, consult the CoX advice channels."
      />
      <div className="grid-container">
        <div className="column">
          <Section
            title="Defence Reduction"
            description="The biggest timesave in CoX is proper defence reduction."
          >
            <Row
              leftAlign
              orderString="ralos*"
              desc="See !ralos.\nBring to Olm. You can spec the head during p3 or at any time during the head phase.\nRalos specing is in addition to defence reduction of melee hand, not instead."
            />
            <Row
              leftAlign
              orderString="bgs*"
              desc="After a DWH/Elder Maul lands, BGS is BIS for def reduction in regular CoX.\nThe combined flat reduction of multiple BGS specs will often reduce Tekton and Olm's hand defence to 0, significantly boosting DPS. This is not possible with DWH/Elder Maul alone."
            />
            <Row
              leftAlign
              orderString="lb*"
              desc="Recommended over other rings, as it enables more defence-reducing specs, particularly at Olm."
            />
          </Section>
          <Section
            title="Mage Gear Notes"
            description=""
          >
            <Row
              leftAlign
              orderString="shadow*"
              desc="Shadow rebuild is now recommended significantly later in the CoX prog than previously. This is due to the strength of the Eye of Ayak and the substantial fall otherwise in DPS in other styles when rebuilding.\nBecause the calculations are based on TMG/MTM raids, those doing other rooms, including Vespula and Vanguards, CMs, or soloing, should prioritize a Shadow rebuild significantly sooner."
            />
            <Row
              leftAlign
              orderString="ayak*"
              desc="Eye cannot reach the mage hand from the melee hand safe tile. A Sang, DHW, or Shadow is needed when standing at the melee safe spot. !ayak"
            />
          </Section>
          <Section
            title="Solo/CM Gear"
            description=""
          >
            <Row
              leftAlign
              orderString="dwh*"
              desc="DWH should be used over a BGS in solos.\nIt is also the main spec weapon brought to CMs, due to higher defence values.\nOnly one DWH should be brought with a team to regular raids. See BGS section above."
            />
            <Row
              leftAlign
              orderString="emaul*"
              desc="Minor upgrade to DWH in regs; more significant in CMs due to higher defence values. Should be purchased post-megas."
            />
            <Row
              leftAlign
              orderString="fang*"
              desc="Can be used in solos at Tekton and for the range Vanguard in CMs, assuming no Scythe.\nDO NOT USE FANG AT OLM. With proper defence reduction, Fang becomes worse DPS than a Dragon Scim at Olm and is below the minimum required gear to raid in WDR."
            />
            <Row
              leftAlign
              orderString="ultor* & magus*"
              desc="Useful for solos and advanced team speedruns.\nFor typical team raids, LB camp is strongly recommended."
            />
            <Row
              leftAlign
              orderString="oathh* & oatht* & oathb*"
              desc="Can be useful for CMs and/or solos.\nFor reg team raids, Blood Moon, Bandos, or Torva are better value propositions."
            />
          </Section>
        </div>
        <div className="column">
          <Section
            title="Iron Considerations"
            description=""
          >
            <Row
              leftAlign
              orderString="fbow* & cbody* & chelm* & clegs*"
              desc="Due to problems irons face with obtaining ammo and charges, a Bowfa can be used in place of crossbows. IT DOES NOT REPLACE BLOWPIPE.\nFor non-irons, read !bowfa before purchasing and never corrupt it.\nA Bowfa can be purchased temporarily when actively pursuing an Infernal Cape or Dizana's Quiver.\nDue to its accuracy, it can be a reasonable option for pre-Shadow/Tbow CMs and/or solos."
            />
            <Row
              leftAlign
              orderString="& bringi*"
              desc="Not recommended, but acceptable if no Lightbearer."
            />
            <Row
              leftAlign
              orderString="dhw* & tomeofearth*"
              desc="Useful mage hand option for irons.\nCan be competitive with Sang/Eye depending on gear and magic level, solidly beating Trident of the Swamp.\nNOT USABLE FOR SOLOS."
            />
          </Section>
          <Section
            title="Untradeable Upgrades"
            description="Recommended to obtain before or while doing CoX."
          >
            <Row
              leftAlign
              orderString="& infernalcape*"
              desc="Greatly reduces tradeable gear requirement for critical Scythe max hit breakpoints.\nVisit #inferno for advice."
            />
            <Row
              leftAlign
              orderString="& quiver*"
              desc="Unlocks max hits with BP and Tbow. It is an essential component to unlocking the top max hits that are achievable in combination with the Necklace of Rupture.\nVisit #colosseum for advice."
            />
          </Section>
          <Section
            title="Room Specific Items"
            description=""
          >
            <Row
              leftAlign
              orderString="& avernic*"
              desc="In max setups, Avernic is a minor upgrade for Guardians only. Do not purchase before all mega rebuilds, as it slows gear progression down."
            />
            <Row
              leftAlign
              orderString="zgs* & horn*"
              desc="For Muttadile freezes. Horn is also useful in CMs to guarantee DWH/Elder Maul specs on high defence Olm hands."
            />
            <Row
              leftAlign
              orderString="bclaws* & emberlight* & darkdemonbane* & ralos*"
              desc="For Ice Demon."
            />
            <Row
              leftAlign
              orderString="zcb* & vw*"
              desc="Not recommended for learners.\nConsult CoX advice channels for more detail."
            />
          </Section>
        </div>
      </div>

      <Section
        title=""
        description="Original prog design by ulia and Fujino Ayumu\nCodebase setup by Coronne\nCoX prog work by toy Owner, Wes J, Chip Dump\nImage chart created by DreamingNote"
      />
    </>
  );
}

export default AppCox3;
