/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DynamicMediaHandlingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Draw interactive elements appearance only.
			 * @type {Adobe.Indesign.DynamicMediaHandlingOptions}
			 * @readonly
			 */
			public static readonly APPEARANCE_ONLY: Adobe.Indesign.DynamicMediaHandlingOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 * @type {Adobe.Indesign.DynamicMediaHandlingOptions}
			 * @readonly
			 */
			public static readonly appearanceOnly: Adobe.Indesign.DynamicMediaHandlingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Include all interactive elements.
			 * @type {Adobe.Indesign.DynamicMediaHandlingOptions}
			 * @readonly
			 */
			public static readonly INCLUDE_ALL_MEDIA: Adobe.Indesign.DynamicMediaHandlingOptions;
			/**
			 * Alias for INCLUDE_ALL_MEDIA. Include all interactive 
			 * elements.
			 * @type {Adobe.Indesign.DynamicMediaHandlingOptions}
			 * @readonly
			 */
			public static readonly includeAllMedia: Adobe.Indesign.DynamicMediaHandlingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}