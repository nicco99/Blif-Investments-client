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
    <div className="sticky top-[95px] hidden lg:flex items-center justify-end z-30 w-full py-6 lg:py-8 bg-[#f3f3f3]">
      <span className="font-bold">Sort by:</span>
      <Select>
        <SelectTrigger className="w-1/5 bg-transparent">
          <SelectValue placeholder="Date, new to old" className="text-lg" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="name-asc">
              Name <sup className="text-xs">A - Z</sup>
            </SelectItem>
            <SelectItem value="name-desc">
              Name <sup className="text-xs">Z - A</sup>
            </SelectItem>
            <SelectItem value="price-desc">
              Price <sup className="text-xs">Low - High</sup>
            </SelectItem>
            <SelectItem value="price-asc">
              Price <sup className="text-xs">High - Low</sup>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
