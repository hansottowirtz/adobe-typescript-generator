/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A layer */
		class Layer extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * is the artwork used to create a knockout
			 * @type {Adobe.Illustrator.KnockoutState}
			 */
			public artworkKnockout: Adobe.Illustrator.KnockoutState;
			/**
			 * the mode used when compositing an object
			 * @type {Adobe.Illustrator.BlendModes}
			 */
			public blendingMode: Adobe.Illustrator.BlendModes;
			/**
			 * color used when outlining artwork in this layer
			 * @type {Adobe.Illustrator.RGBColor}
			 */
			public color: Adobe.Illustrator.RGBColor;
			/**
			 * The compound path artwork in this layer
			 * @type {Adobe.Illustrator.CompoundPathItems}
			 * @readonly
			 */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			/**
			 * Is rendered as dimmed in this layer?
			 * @type {boolean}
			 */
			public dimPlacedImages: boolean;
			/**
			 * The graph art items in this layer
			 * @type {Adobe.Illustrator.GraphItems}
			 * @readonly
			 */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/**
			 * The group items in this layer
			 * @type {Adobe.Illustrator.GroupItems}
			 * @readonly
			 */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			/**
			 * Is any artwork in this layer selected? Setting this property 
			 * to false deselects all artwork in the layer.
			 * @type {boolean}
			 */
			public hasSelectedArtwork: boolean;
			/**
			 * is the artwork isolated
			 * @type {boolean}
			 */
			public isIsolated: boolean;
			/**
			 * Nested layers
			 * @type {Adobe.Illustrator.Layers}
			 * @readonly
			 */
			public readonly layers: Adobe.Illustrator.Layers;
			/**
			 * The text frame items in this story
			 * @type {Adobe.Illustrator.LegacyTextItems}
			 * @readonly
			 */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/**
			 * Is the layer editable?
			 * @type {boolean}
			 */
			public locked: boolean;
			/**
			 * The mesh art items in this layer
			 * @type {Adobe.Illustrator.MeshItems}
			 * @readonly
			 */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/**
			 * The layer's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * The non-native art items in this layer
			 * @type {Adobe.Illustrator.NonNativeItems}
			 * @readonly
			 */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			/**
			 * The layer's opacity (between 0.0 and 100.0)
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * All the artwork in this layer
			 * @type {Adobe.Illustrator.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/**
			 * The path artwork in this layer
			 * @type {Adobe.Illustrator.PathItems}
			 * @readonly
			 */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/**
			 * The placed art items in this layer
			 * @type {Adobe.Illustrator.PlacedItems}
			 * @readonly
			 */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/**
			 * The plugin art items in this layer
			 * @type {Adobe.Illustrator.PluginItems}
			 * @readonly
			 */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			/**
			 * Is the layer rendered in preview mode?
			 * @type {boolean}
			 */
			public preview: boolean;
			/**
			 * Is the layer printable?
			 * @type {boolean}
			 */
			public printable: boolean;
			/**
			 * The raster art items in this layer
			 * @type {Adobe.Illustrator.RasterItems}
			 * @readonly
			 */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			/**
			 * Is the layer sliced (default: false)
			 * @type {boolean}
			 */
			public sliced: boolean;
			/**
			 * the symbol items in this layer
			 * @type {Adobe.Illustrator.SymbolItems}
			 * @readonly
			 */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/**
			 * The text frame items in this layer
			 * @type {Adobe.Illustrator.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			/**
			 * Is the layer visible?
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * the drawing order of the layer
			 * @type {number}
			 * @readonly
			 */
			public readonly zOrderPosition: number;
			/**
			 * move the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation 
			 * @returns {void}
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Arranges the layer relative to other layers
			 * @param {Adobe.Illustrator.ZOrderMethod} zOrderCmd how to 
			 * arrange the layer
			 * @returns {void}
			 */
			public zOrder(zOrderCmd: Adobe.Illustrator.ZOrderMethod): void;
		}
	}
}