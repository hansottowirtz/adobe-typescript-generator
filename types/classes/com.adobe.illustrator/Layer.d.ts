/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Layer extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Is the artwork used to create a knockout. */
			public artworkKnockout: Adobe.Illustrator.KnockoutState;
			/** The mode used when compositing an object. */
			public blendingMode: Adobe.Illustrator.BlendModes;
			/** Color used when outlining artwork in this layer. */
			public color: Adobe.Illustrator.RGBColor;
			/** The compound path artwork in this layer. */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			/** Is rendered as dimmed in this layer? */
			public dimPlacedImages: boolean;
			/** The graph art items in this layer. */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/** The group items in this layer. */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			/**
			 * Is any artwork in this layer selected? Setting this property 
			 * to false deselects all artwork in the layer.
			 */
			public hasSelectedArtwork: boolean;
			/** Is the artwork isolated. */
			public isIsolated: boolean;
			/** Nested layers. */
			public readonly layers: Adobe.Illustrator.Layers;
			/** The text frame items in this story. */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/** Is the layer editable? */
			public locked: boolean;
			/** The mesh art items in this layer. */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/** The layer's name. */
			public name: string;
			/** The non-native art items in this layer. */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			/** The layer's opacity (between 0.0 and 100.0) */
			public opacity: number;
			/** All the artwork in this layer. */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/** The path artwork in this layer. */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/** The placed art items in this layer. */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/** The plugin art items in this layer. */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			/** Is the layer rendered in preview mode? */
			public preview: boolean;
			/** Is the layer printable? */
			public printable: boolean;
			/** The raster art items in this layer. */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			/** Is the layer sliced (default: false) */
			public sliced: boolean;
			/** The symbol items in this layer. */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/** The text frame items in this layer. */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			/** Is the layer visible? */
			public visible: boolean;
			/** The drawing order of the layer. */
			public readonly zOrderPosition: number;
			/**
			 * move the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation - 
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/**
			 * Arranges the layer relative to other layers.
			 * @param {Adobe.Illustrator.ZOrderMethod} zOrderCmd - How to 
			 * arrange the layer.
			 */
			public zOrder(zOrderCmd: Adobe.Illustrator.ZOrderMethod): void;
		}
	}
}