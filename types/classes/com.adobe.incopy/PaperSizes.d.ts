/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PaperSizes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Allows definition of a custom paper size. 
			 * Note: Not all printers allow custom paper sizes.
			 * @type {Adobe.Incopy.PaperSizes}
			 * @readonly
			 */
			public static readonly custom: Adobe.Incopy.PaperSizes;
			/**
			 * Allows definition of a custom paper size. Note: Not all 
			 * printers allow custom paper sizes.
			 * @type {Adobe.Incopy.PaperSizes}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Incopy.PaperSizes;
			/**
			 * Allows the printer driver to define the paper size.
			 * @type {Adobe.Incopy.PaperSizes}
			 * @readonly
			 */
			public static readonly DEFINED_BY_DRIVER: Adobe.Incopy.PaperSizes;
			/**
			 * Alias for DEFINED_BY_DRIVER. Allows the printer driver to 
			 * define the paper size.
			 * @type {Adobe.Incopy.PaperSizes}
			 * @readonly
			 */
			public static readonly definedByDriver: Adobe.Incopy.PaperSizes;
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