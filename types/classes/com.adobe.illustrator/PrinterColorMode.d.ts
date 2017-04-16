/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrinterColorMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PrinterColorMode}
			 * @readonly
			 */
			public static readonly BLACKANDWHITEPRINTER: Adobe.Illustrator.PrinterColorMode;
			/**
			 * @type {Adobe.Illustrator.PrinterColorMode}
			 * @readonly
			 */
			public static readonly COLORPRINTER: Adobe.Illustrator.PrinterColorMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PrinterColorMode}
			 * @readonly
			 */
			public static readonly GRAYSCALEPRINTER: Adobe.Illustrator.PrinterColorMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}