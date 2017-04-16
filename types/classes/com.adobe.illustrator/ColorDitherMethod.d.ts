/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorDitherMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.ColorDitherMethod}
			 * @readonly
			 */
			public static readonly DIFFUSION: Adobe.Illustrator.ColorDitherMethod;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ColorDitherMethod}
			 * @readonly
			 */
			public static readonly NOISE: Adobe.Illustrator.ColorDitherMethod;
			/**
			 * @type {Adobe.Illustrator.ColorDitherMethod}
			 * @readonly
			 */
			public static readonly NOREDUCTION: Adobe.Illustrator.ColorDitherMethod;
			/**
			 * @type {Adobe.Illustrator.ColorDitherMethod}
			 * @readonly
			 */
			public static readonly PATTERNDITHER: Adobe.Illustrator.ColorDitherMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}