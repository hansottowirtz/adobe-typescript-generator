/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FlashImageFormat extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.FlashImageFormat}
			 * @readonly
			 */
			public static readonly LOSSLESS: Adobe.Illustrator.FlashImageFormat;
			/**
			 * @type {Adobe.Illustrator.FlashImageFormat}
			 * @readonly
			 */
			public static readonly LOSSY: Adobe.Illustrator.FlashImageFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}