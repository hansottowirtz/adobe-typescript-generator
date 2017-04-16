/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Tracing options that guide the tracing process. */
		class TracingOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * ColorFidelity when TracingColorTypeValue is 
			 * TracingFullColor.
			 */
			public colorFidelity: number;
			/**
			 * The color group name used for tracing. Use 'All' or any 
			 * color group name available in color Palette (library).
			 */
			public colorGroup: string;
			/** Corner fidelity for tracing. */
			public cornerFidelity: number;
			/** Tracing with fills. Fills, Strokes or both must be on. */
			public fills: boolean;
			/** The gray levels for a grayscale mode tracing.. ( 1 - 256 ) */
			public grayLevels: number;
			/**
			 * Controls whether to ignore white fill color. Works only if 
			 * TracingMethod is TracingMethodAbutting and mode is Black and 
			 * white.
			 */
			public ignoreWhite: boolean;
			/** Maximum stroke weight (stroke only). */
			public maxStrokeWeight: number;
			/** Specifies minimum area of pixels to be vectorized. */
			public noiseFidelity: number;
			/**
			 * The color palette (Library) name used for tracing. Use 
			 * 'Document Library' or any other imported library name.
			 */
			public palette: string;
			/** Path fidelity for tracing. */
			public pathFidelity: number;
			/** The name of the preset in use.  Read-only. */
			public readonly preset: string;
			/** Controls whether to snap curve to lines. */
			public snapCurveToLines: boolean;
			/** Tracing with strokes.  Fills, Strokes or both must be on. */
			public strokes: boolean;
			/**
			 * The threshold value for a black and white mode tracing. ( 1 
			 * - 256 )
			 */
			public threshold: number;
			/**
			 * Maximum number of colors allowed for tracing when 
			 * TracingColorTypeValue is TracingLimitedColor.
			 */
			public tracingColors: number;
			/**
			 * Color Type used for tracing, TracingLimitedColor or 
			 * TracingFullColor .
			 */
			public tracingColorTypeValue: Adobe.Illustrator.TracingColorType;
			/** Method for tracing, either abutting or adjoining paths. */
			public tracingMethod: Adobe.Illustrator.TracingMethodType;
			/** The tracing mode: color, gray, black and white. */
			public tracingMode: Adobe.Illustrator.TracingModeType;
			/** The visualization mode. */
			public viewMode: Adobe.Illustrator.ViewType;
			/**
			 * Load options from preset.
			 * @param {string} presetName the name of the preset.
			 */
			public loadFromPreset(presetName: string): boolean;
			/**
			 * Store options to a preset kAiVectorizeSuite.  Will overwrite 
			 * an existing (unlocked) preset if names match.
			 * @param {string} presetName the name of the preset.
			 */
			public storeToPreset(presetName: string): boolean;
		}
	}
}