/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TracingOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Corner angle. */
			public cornerAngle: number;
			/**
			 * Tracing with fills. At least one of Fills and Strokes must 
			 * be on.
			 */
			public fills: boolean;
			/** Controls whether to ignore white fill color. */
			public ignoreWhite: boolean;
			/** Controls whether result art is LivePaint or classic art. */
			public livePaintOutput: boolean;
			/**
			 * The number of colors allowed for automatic palette 
			 * generation.
			 */
			public maxColors: number;
			/** Maximum stroke weight (stroke only). */
			public maxStrokeWeight: number;
			/** Minimum area. */
			public minArea: number;
			/** Minimum stroke length (stroke only). */
			public minStrokeLength: number;
			/** Controls whether named colors (swatches) are generated. */
			public outputToSwatches: boolean;
			/**
			 * The color palette used for tracing, empty string indicates 
			 * automatic palette.
			 */
			public palette: string;
			/** Path fitting. */
			public pathFitting: number;
			/** The blur amount during preprocessing. */
			public preprocessBlur: number;
			/** The preset name use. Read-only. */
			public readonly preset: string;
			/** The resampling control. */
			public resample: boolean;
			/** The resampling resolution. */
			public resampleResolution: number;
			/**
			 * Tracing with strokes. At least one of Fills and Strokes must 
			 * be on.
			 */
			public strokes: boolean;
			/**
			 * The threshold value for a black and white tracing. ( 0 - 255 
			 * )
			 */
			public threshold: number;
			/** The tracing mode: color, gray, black and white. */
			public tracingMode: Adobe.Illustrator.TracingModeType;
			/** The raster visualization mode. */
			public viewRaster: Adobe.Illustrator.ViewRasterType;
			/** The vector visualization mode. */
			public viewVector: Adobe.Illustrator.ViewVectorType;
			/** Load options from preset. */
			public loadFromPreset(presetName: string): boolean;
			/**
			 * Store options to a preset. Will overwrite an existing 
			 * (unlocked) preset if names match.
			 */
			public storeToPreset(presetName: string): boolean;
		}
	}
}