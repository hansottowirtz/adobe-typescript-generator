/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintColorIntent extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PrintColorIntent}
			 * @readonly
			 */
			public static readonly ABSOLUTECOLORIMETRIC: Adobe.Illustrator.PrintColorIntent;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PrintColorIntent}
			 * @readonly
			 */
			public static readonly PERCEPTUALINTENT: Adobe.Illustrator.PrintColorIntent;
			/**
			 * @type {Adobe.Illustrator.PrintColorIntent}
			 * @readonly
			 */
			public static readonly RELATIVECOLORIMETRIC: Adobe.Illustrator.PrintColorIntent;
			/**
			 * @type {Adobe.Illustrator.PrintColorIntent}
			 * @readonly
			 */
			public static readonly SATURATIONINTENT: Adobe.Illustrator.PrintColorIntent;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}