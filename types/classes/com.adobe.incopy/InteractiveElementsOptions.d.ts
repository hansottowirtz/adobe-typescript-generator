/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class InteractiveElementsOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Draw interactive elements appearance only.
			 * @type {Adobe.Incopy.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly APPEARANCE_ONLY: Adobe.Incopy.InteractiveElementsOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 * @type {Adobe.Incopy.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly appearanceOnly: Adobe.Incopy.InteractiveElementsOptions;
			/**
			 * Do not include interactive elements.
			 * @type {Adobe.Incopy.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly DO_NOT_INCLUDE: Adobe.Incopy.InteractiveElementsOptions;
			/**
			 * Alias for DO_NOT_INCLUDE. Do not include interactive 
			 * elements.
			 * @type {Adobe.Incopy.InteractiveElementsOptions}
			 * @readonly
			 */
			public static readonly doNotInclude: Adobe.Incopy.InteractiveElementsOptions;
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