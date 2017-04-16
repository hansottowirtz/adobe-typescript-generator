/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Printer extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Prints to a PostScript file.
			 * @type {Adobe.Incopy.Printer}
			 * @readonly
			 */
			public static readonly POSTSCRIPT_FILE: Adobe.Incopy.Printer;
			/**
			 * Alias for POSTSCRIPT_FILE. Prints to a PostScript file.
			 * @type {Adobe.Incopy.Printer}
			 * @readonly
			 */
			public static readonly postscriptFile: Adobe.Incopy.Printer;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}