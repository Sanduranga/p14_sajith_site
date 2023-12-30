import { entryFoyerUploads } from "@/models/entryfoyerModel";
import { kitchenUploads } from "@/models/kitchenModel";
import mongoose, { Collection } from "mongoose";

export const entry_foyerC: Collection = mongoose.model(
  "entry_foyer",
  entryFoyerUploads
) as any;
export const cooking_hubC: Collection = mongoose.model(
  "cooking_hub",
  kitchenUploads
) as any;
