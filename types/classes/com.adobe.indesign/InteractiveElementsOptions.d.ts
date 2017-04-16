/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InteractiveElementsOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Draw interactive elements appearance only.
			 * @type {Adobe.Indesign.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly APPEARANCE_ONLY: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 * @type {Adobe.Indesign.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly appearanceOnly: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Do not include interactive elements.
			 * @type {Adobe.Indesign.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly DO_NOT_INCLUDE: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Alias for DO_NOT_INCLUDE. Do not include interactive 
			 * elements.
			 * @type {Adobe.Indesign.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly doNotInclude: Adobe.Indesign.InteractiveElementsOptions;
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