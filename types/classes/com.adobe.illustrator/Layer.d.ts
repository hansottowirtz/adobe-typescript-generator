/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Layer extends IllustratorHostObject {
			/** Is the artwork used to create a knockout. */
			public artworkKnockout: KnockoutState;
			/** The mode used when compositing an object. */
			public blendingMode: BlendModes;
			/** Color used when outlining artwork in this layer. */
			public color: RGBColor;
			/** The compound path artwork in this layer. */
			public readonly compoundPathItems: CompoundPathItems;
			/** Is rendered as dimmed in this layer? */
			public dimPlacedImages: boolean;
			/** The graph art items in this layer. */
			public readonly graphItems: GraphItems;
			/** The group items in this layer. */
			public readonly groupItems: GroupItems;
			/**
			 * Is any artwork in this layer selected? Setting this property 
			 * to false deselects all artwork in the layer.
			 */
			public hasSelectedArtwork: boolean;
			/** Is the artwork isolated. */
			public isIsolated: boolean;
			/** Nested layers. */
			public readonly layers: Layers;
			/** The text frame items in this story. */
			public readonly legacyTextItems: LegacyTextItems;
			/** Is the layer editable? */
			public locked: boolean;
			/** The mesh art items in this layer. */
			public readonly meshItems: MeshItems;
			/** The layer's name. */
			public name: string;
			/** The non-native art items in this layer. */
			public readonly nonNativeItems: NonNativeItems;
			/** The layer's opacity (between 0.0 and 100.0) */
			public opacity: number;
			/** All the artwork in this layer. */
			public readonly pageItems: PageItems;
			/** The path artwork in this layer. */
			public readonly pathItems: PathItems;
			/** The placed art items in this layer. */
			public readonly placedItems: PlacedItems;
			/** The plugin art items in this layer. */
			public readonly pluginItems: PluginItems;
			/** Is the layer rendered in preview mode? */
			public preview: boolean;
			/** Is the layer printable? */
			public printable: boolean;
			/** The raster art items in this layer. */
			public readonly rasterItems: RasterItems;
			/** Is the layer sliced (default: false) */
			public sliced: boolean;
			/** The symbol items in this layer. */
			public readonly symbolItems: SymbolItems;
			/** The text frame items in this layer. */
			public readonly textFrames: TextFrames;
			/** Is the layer visible? */
			public visible: boolean;
			/** The drawing order of the layer. */
			public readonly zOrderPosition: number;
			/** move the object */
			public move(relativeObject: any, insertionLocation: ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/** Arranges the layer relative to other layers. */
			public zOrder(zOrderCmd: ZOrderMethod): void;
		}
	}
}