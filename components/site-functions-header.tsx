import { Separator } from "@radix-ui/react-separator";
import { ModeSwitcher } from "@/components/mode-switcher";
import { CommandMenu } from "@/components/command-menu";

export function SiteFunctionsHeader() {
  return (
    <div className="flex items-center md:flex-1 md:justify-end">
      <CommandMenu />
      <Separator orientation="vertical" className="ml-2 h-4" />
      <ModeSwitcher />
    </div>
  );
}
