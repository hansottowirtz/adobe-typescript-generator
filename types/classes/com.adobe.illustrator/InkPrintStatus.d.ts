/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class InkPrintStatus extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.InkPrintStatus}
			 * @readonly
			 */
			public static readonly CONVERTINK: Adobe.Illustrator.InkPrintStatus;
			/**
			 * @type {Adobe.Illustrator.InkPrintStatus}
			 * @readonly
			 */
			public static readonly DISABLEINK: Adobe.Illustrator.InkPrintStatus;
			/**
			 * @type {Adobe.Illustrator.InkPrintStatus}
			 * @readonly
			 */
			public static readonly ENABLEINK: Adobe.Illustrator.InkPrintStatus;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}