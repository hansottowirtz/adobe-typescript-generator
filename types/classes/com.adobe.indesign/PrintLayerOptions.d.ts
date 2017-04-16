/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrintLayerOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Prints all layers.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 * @readonly
			 */
			public static readonly ALL_LAYERS: Adobe.Indesign.PrintLayerOptions;
			/**
			 * Alias for ALL_LAYERS. Prints all layers.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 * @readonly
			 */
			public static readonly allLayers: Adobe.Indesign.PrintLayerOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Prints all visible layers.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 * @readonly
			 */
			public static readonly VISIBLE_LAYERS: Adobe.Indesign.PrintLayerOptions;
			/**
			 * Prints only layers that are both visible and printable.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 * @readonly
			 */
			public static readonly VISIBLE_PRINTABLE_LAYERS: Adobe.Indesign.PrintLayerOptions;
			/**
			 * Alias for VISIBLE_LAYERS. Prints all visible layers.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 * @readonly
			 */
			public static readonly visibleLayers: Adobe.Indesign.PrintLayerOptions;
			/**
			 * Alias for VISIBLE_PRINTABLE_LAYERS. Prints only layers that 
			 * are both visible and printable.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 * @readonly
			 */
			public static readonly visiblePrintableLayers: Adobe.Indesign.PrintLayerOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}