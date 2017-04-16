/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ExportLayerOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Export all layers
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 * @readonly
			 */
			public static readonly EXPORT_ALL_LAYERS: Adobe.Indesign.ExportLayerOptions;
			/**
			 * Export visible layers
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 * @readonly
			 */
			public static readonly EXPORT_VISIBLE_LAYERS: Adobe.Indesign.ExportLayerOptions;
			/**
			 * Export visible and printable layers
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 * @readonly
			 */
			public static readonly EXPORT_VISIBLE_PRINTABLE_LAYERS: Adobe.Indesign.ExportLayerOptions;
			/**
			 * Alias for EXPORT_ALL_LAYERS. Export all layers
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 * @readonly
			 */
			public static readonly exportAllLayers: Adobe.Indesign.ExportLayerOptions;
			/**
			 * Alias for EXPORT_VISIBLE_LAYERS. Export visible layers
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 * @readonly
			 */
			public static readonly exportVisibleLayers: Adobe.Indesign.ExportLayerOptions;
			/**
			 * Alias for EXPORT_VISIBLE_PRINTABLE_LAYERS. Export visible 
			 * and printable layers
			 * @type {Adobe.Indesign.ExportLayerOptions}
			 * @readonly
			 */
			public static readonly exportVisiblePrintableLayers: Adobe.Indesign.ExportLayerOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}