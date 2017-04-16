/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Printer extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Prints to a PostScript file.
			 * @type {Adobe.Indesign.Printer}
			 * @readonly
			 */
			public static readonly POSTSCRIPT_FILE: Adobe.Indesign.Printer;
			/**
			 * Alias for POSTSCRIPT_FILE. Prints to a PostScript file.
			 * @type {Adobe.Indesign.Printer}
			 * @readonly
			 */
			public static readonly postscriptFile: Adobe.Indesign.Printer;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}