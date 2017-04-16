/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrinterTypeEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PrinterTypeEnum}
			 * @readonly
			 */
			public static readonly NONPOSTSCRIPTPRINTER: Adobe.Illustrator.PrinterTypeEnum;
			/**
			 * @type {Adobe.Illustrator.PrinterTypeEnum}
			 * @readonly
			 */
			public static readonly POSTSCRIPTPRINTER: Adobe.Illustrator.PrinterTypeEnum;
			/**
			 * @type {Adobe.Illustrator.PrinterTypeEnum}
			 * @readonly
			 */
			public static readonly Unknown: Adobe.Illustrator.PrinterTypeEnum;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}