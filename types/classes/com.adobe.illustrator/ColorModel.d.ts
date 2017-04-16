/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorModel extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ColorModel}
			 * @readonly
			 */
			public static readonly PROCESS: Adobe.Illustrator.ColorModel;
			/**
			 * @type {Adobe.Illustrator.ColorModel}
			 * @readonly
			 */
			public static readonly REGISTRATION: Adobe.Illustrator.ColorModel;
			/**
			 * @type {Adobe.Illustrator.ColorModel}
			 * @readonly
			 */
			public static readonly SPOT: Adobe.Illustrator.ColorModel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}