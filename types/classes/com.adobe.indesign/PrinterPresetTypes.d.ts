/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrinterPresetTypes extends Adobe.Csawlib.CSEnumBase {
			/** Alias for CUSTOM. A custom printer preset. */
			public static readonly custom: Adobe.Indesign.PrinterPresetTypes;
			/** A custom printer preset. */
			public static readonly CUSTOM: Adobe.Indesign.PrinterPresetTypes;
			/** The default printer preset. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.PrinterPresetTypes;
			/** Alias for DEFAULT_VALUE. The default printer preset. */
			public static readonly defaultValue: Adobe.Indesign.PrinterPresetTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}