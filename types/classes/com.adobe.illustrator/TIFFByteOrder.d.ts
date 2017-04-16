/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TIFFByteOrder extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.TIFFByteOrder}
			 * @readonly
			 */
			public static readonly IBMPC: Adobe.Illustrator.TIFFByteOrder;
			/**
			 * @type {Adobe.Illustrator.TIFFByteOrder}
			 * @readonly
			 */
			public static readonly MACINTOSH: Adobe.Illustrator.TIFFByteOrder;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}