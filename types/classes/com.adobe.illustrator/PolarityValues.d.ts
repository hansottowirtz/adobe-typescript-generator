/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PolarityValues extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PolarityValues}
			 * @readonly
			 */
			public static readonly NEGATIVE: Adobe.Illustrator.PolarityValues;
			/**
			 * @type {Adobe.Illustrator.PolarityValues}
			 * @readonly
			 */
			public static readonly POSITIVE: Adobe.Illustrator.PolarityValues;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}