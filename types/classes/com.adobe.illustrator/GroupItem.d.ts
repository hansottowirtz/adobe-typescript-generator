/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GroupItem extends Adobe.Illustrator.PageItem {
			/** Are the group elements clipped to the clipping path? */
			public clipped: boolean;
			/** The compound path artwork in this group. */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			/** The graph art items in this group. */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/** The group items in this group. */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			/** The text frame items in this story. */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/** The mesh art items in this group. */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/** The non-native art items in this group. */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			/** All the artwork in this group. */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/** The path artwork in this group. */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/** The placed art items in this group. */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/** The plugin art items in this group. */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			/** The raster art items in this group. */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			/** The symbol items in this group. */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/** The text frame items in this group. */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
		}
	}
}