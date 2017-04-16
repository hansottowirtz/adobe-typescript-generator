/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorReductionMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.ColorReductionMethod}
			 * @readonly
			 */
			public static readonly ADAPTIVE: Adobe.Illustrator.ColorReductionMethod;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ColorReductionMethod}
			 * @readonly
			 */
			public static readonly PERCEPTUAL: Adobe.Illustrator.ColorReductionMethod;
			/**
			 * @type {Adobe.Illustrator.ColorReductionMethod}
			 * @readonly
			 */
			public static readonly SELECTIVE: Adobe.Illustrator.ColorReductionMethod;
			/**
			 * @type {Adobe.Illustrator.ColorReductionMethod}
			 * @readonly
			 */
			public static readonly WEB: Adobe.Illustrator.ColorReductionMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}