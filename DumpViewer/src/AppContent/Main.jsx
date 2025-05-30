import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import "@/index.css";
/**
 * MARK: Main component
 * @description This is the main component of the application, Mainly in charge of initial page structure and global state.
 */
export const Main = () => {
  return (
    <>
      <div className="bg-black">Main Component</div>
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <Badge variant="secondary">Badge</Badge>
    </>
  );
};
