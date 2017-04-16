/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrinterPresetTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. A custom printer preset.
			 * @type {Adobe.Indesign.PrinterPresetTypes}
			 * @readonly
			 */
			public static readonly custom: Adobe.Indesign.PrinterPresetTypes;
			/**
			 * A custom printer preset.
			 * @type {Adobe.Indesign.PrinterPresetTypes}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Indesign.PrinterPresetTypes;
			/**
			 * The default printer preset.
			 * @type {Adobe.Indesign.PrinterPresetTypes}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.PrinterPresetTypes;
			/**
			 * Alias for DEFAULT_VALUE. The default printer preset.
			 * @type {Adobe.Indesign.PrinterPresetTypes}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.PrinterPresetTypes;
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