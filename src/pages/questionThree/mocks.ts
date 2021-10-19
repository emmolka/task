import AcUnit from "@material-ui/icons/AcUnit";
import { SvgIconComponent } from "@material-ui/icons";
import UUID from "uuid/v4";

/*
 * Please do not add all the mock data statically here.
 * While you would solve the problem, you would not be solving the bug ;)
 * */

export interface Mock {
  species: string | null;
  name: string | null;
  description: string | null;
  icon: SvgIconComponent | null;
  id?: undefined | null;
}

const defaultMock: Mock = {
  species: "Human",
  name: "Jon Snow",
  icon: AcUnit,
  description: "You know nothing, Jon Snow.",
  id: undefined,
};

const createRowData = ({ name, species, icon, description }: Mock): Mock => {
  const rowData = { ...defaultMock };
  rowData.id = UUID();
  rowData.name = name ? name : rowData.name;
  rowData.species = species ? species : rowData.species;
  rowData.icon = !!icon ? icon : rowData.icon;
  rowData.description = description ? description : rowData.description;
  return rowData;
};

export { createRowData };
