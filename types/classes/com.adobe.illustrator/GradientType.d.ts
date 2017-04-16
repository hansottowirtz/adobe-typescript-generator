/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class GradientType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.GradientType}
			 * @readonly
			 */
			public static readonly LINEAR: Adobe.Illustrator.GradientType;
			/**
			 * @type {Adobe.Illustrator.GradientType}
			 * @readonly
			 */
			public static readonly RADIAL: Adobe.Illustrator.GradientType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}