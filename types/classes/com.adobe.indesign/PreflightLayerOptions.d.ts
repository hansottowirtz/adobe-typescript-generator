/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightLayerOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preflight all layers */
			public static readonly PREFLIGHT_ALL_LAYERS: Adobe.Indesign.PreflightLayerOptions;
			/** Preflight visible layers */
			public static readonly PREFLIGHT_VISIBLE_LAYERS: Adobe.Indesign.PreflightLayerOptions;
			/** Preflight visible and printable layers */
			public static readonly PREFLIGHT_VISIBLE_PRINTABLE_LAYERS: Adobe.Indesign.PreflightLayerOptions;
			/** Alias for PREFLIGHT_ALL_LAYERS. Preflight all layers */
			public static readonly preflightAllLayers: Adobe.Indesign.PreflightLayerOptions;
			/**
			 * Alias for PREFLIGHT_VISIBLE_LAYERS. Preflight visible layers
			 */
			public static readonly preflightVisibleLayers: Adobe.Indesign.PreflightLayerOptions;
			/**
			 * Alias for PREFLIGHT_VISIBLE_PRINTABLE_LAYERS. Preflight 
			 * visible and printable layers
			 */
			public static readonly preflightVisiblePrintableLayers: Adobe.Indesign.PreflightLayerOptions;
			/** Constructor */
			public constructor();
		}
	}
}