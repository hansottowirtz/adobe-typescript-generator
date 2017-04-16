/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentColorSpace extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.DocumentColorSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Illustrator.DocumentColorSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.DocumentColorSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Illustrator.DocumentColorSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}