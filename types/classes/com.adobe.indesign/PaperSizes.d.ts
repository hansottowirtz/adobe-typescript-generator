/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PaperSizes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Allows definition of a custom paper size. 
			 * Note: Not all printers allow custom paper sizes.
			 * @type {Adobe.Indesign.PaperSizes}
			 * @readonly
			 */
			public static readonly custom: Adobe.Indesign.PaperSizes;
			/**
			 * Allows definition of a custom paper size. Note: Not all 
			 * printers allow custom paper sizes.
			 * @type {Adobe.Indesign.PaperSizes}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Indesign.PaperSizes;
			/**
			 * Allows the printer driver to define the paper size.
			 * @type {Adobe.Indesign.PaperSizes}
			 * @readonly
			 */
			public static readonly DEFINED_BY_DRIVER: Adobe.Indesign.PaperSizes;
			/**
			 * Alias for DEFINED_BY_DRIVER. Allows the printer driver to 
			 * define the paper size.
			 * @type {Adobe.Indesign.PaperSizes}
			 * @readonly
			 */
			public static readonly definedByDriver: Adobe.Indesign.PaperSizes;
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