/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GroupItem extends PageItem {
			/** Are the group elements clipped to the clipping path? */
			public clipped: boolean;
			/** The compound path artwork in this group. */
			public readonly compoundPathItems: CompoundPathItems;
			/** The graph art items in this group. */
			public readonly graphItems: GraphItems;
			/** The group items in this group. */
			public readonly groupItems: GroupItems;
			/** The text frame items in this story. */
			public readonly legacyTextItems: LegacyTextItems;
			/** The mesh art items in this group. */
			public readonly meshItems: MeshItems;
			/** The non-native art items in this group. */
			public readonly nonNativeItems: NonNativeItems;
			/** All the artwork in this group. */
			public readonly pageItems: PageItems;
			/** The path artwork in this group. */
			public readonly pathItems: PathItems;
			/** The placed art items in this group. */
			public readonly placedItems: PlacedItems;
			/** The plugin art items in this group. */
			public readonly pluginItems: PluginItems;
			/** The raster art items in this group. */
			public readonly rasterItems: RasterItems;
			/** The symbol items in this group. */
			public readonly symbolItems: SymbolItems;
			/** The text frame items in this group. */
			public readonly textFrames: TextFrames;
		}
	}
}