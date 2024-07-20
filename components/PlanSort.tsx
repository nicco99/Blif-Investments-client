import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const PlanSort = () => {
  return (
    <div className="sticky top-[95px] hidden lg:flex items-center justify-end z-30 w-full py-6 lg:py-8 bg-white">
      <span className="font-bold">Sort by:</span>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Date, new to old" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="hiiii">Hiiii</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
