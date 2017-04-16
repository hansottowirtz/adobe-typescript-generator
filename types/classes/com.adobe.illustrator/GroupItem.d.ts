/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An artwork group item */
		class GroupItem extends Adobe.Illustrator.PageItem {
			/**
			 * are the group elements clipped to the clipping path?
			 * @type {boolean}
			 */
			public clipped: boolean;
			/**
			 * The compound path artwork in this group
			 * @type {Adobe.Illustrator.CompoundPathItems}
			 * @readonly
			 */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			/**
			 * The graph art items in this group
			 * @type {Adobe.Illustrator.GraphItems}
			 * @readonly
			 */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/**
			 * The group items in this group
			 * @type {Adobe.Illustrator.GroupItems}
			 * @readonly
			 */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			/**
			 * The text frame items in this story
			 * @type {Adobe.Illustrator.LegacyTextItems}
			 * @readonly
			 */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/**
			 * The mesh art items in this group
			 * @type {Adobe.Illustrator.MeshItems}
			 * @readonly
			 */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/**
			 * The non-native art items in this group
			 * @type {Adobe.Illustrator.NonNativeItems}
			 * @readonly
			 */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			/**
			 * All the artwork in this group
			 * @type {Adobe.Illustrator.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/**
			 * The path artwork in this group
			 * @type {Adobe.Illustrator.PathItems}
			 * @readonly
			 */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/**
			 * The placed art items in this group
			 * @type {Adobe.Illustrator.PlacedItems}
			 * @readonly
			 */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/**
			 * The plugin art items in this group
			 * @type {Adobe.Illustrator.PluginItems}
			 * @readonly
			 */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			/**
			 * The raster art items in this group
			 * @type {Adobe.Illustrator.RasterItems}
			 * @readonly
			 */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			/**
			 * the symbol items in this group
			 * @type {Adobe.Illustrator.SymbolItems}
			 * @readonly
			 */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/**
			 * The text frame items in this group
			 * @type {Adobe.Illustrator.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
		}
	}
}