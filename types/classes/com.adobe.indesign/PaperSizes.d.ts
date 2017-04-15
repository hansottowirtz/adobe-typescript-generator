/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PaperSizes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Allows definition of a custom paper size. 
			 * Note: Not all printers allow custom paper sizes.
			 */
			public static readonly custom: Adobe.Indesign.PaperSizes;
			/**
			 * Allows definition of a custom paper size. Note: Not all 
			 * printers allow custom paper sizes.
			 */
			public static readonly CUSTOM: Adobe.Indesign.PaperSizes;
			/** Allows the printer driver to define the paper size. */
			public static readonly DEFINED_BY_DRIVER: Adobe.Indesign.PaperSizes;
			/**
			 * Alias for DEFINED_BY_DRIVER. Allows the printer driver to 
			 * define the paper size.
			 */
			public static readonly definedByDriver: Adobe.Indesign.PaperSizes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}