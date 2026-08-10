import { parseProg, formatItem } from "../utils/prog-parser";
export default function Row({
  orderString,
  desc,
  descClass,
  colCount,
  lead,
  trail,
  leftAlign,
}: {
  orderString: string;
  desc?: string;
  descClass?: string;
  colCount?: number;
  lead?: boolean;
  trail?: boolean;
  leftAlign?: boolean;
}) {
  const [parsed] = parseProg(orderString);
  if (!descClass) {
    descClass = "fs14 infodesc"
  }

  return (
    <div className={`row ${trail ? "ml-[15px]" : "ml-auto"} mr-auto`}>
      <div
        key={parsed}
        className={`icontainer flex flex-row items-center justify-${leftAlign ? "left" : "center"}`}
      >
        {lead && <img src="src/assets/arr-right.png" />}
        {parsed.map((itemGroup, i) => {
          return itemGroup.length == 1
            ? formatItem(itemGroup[0], i, i < parsed.length - 1 ? ">" : "", parseInt(colCount))
            : itemGroup.map((item: string, j: number) => {
                return formatItem(
                  item,
                  j,
                  j < itemGroup.length - 1
                    ? "+"
                    : i < parsed.length - 1
                    ? ">"
                    : "",
                  parseInt(colCount)
                );
              });
        })}
        {desc && <span className={`${descClass}`}>
            {desc?.split("\\n").map((d, i) => (
              <p key={i}>{d}</p>
            ))}</span>}
        {trail && <img src="src/assets/arr-right.png" />}
      </div>
    </div>
  );
}
