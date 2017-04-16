/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangebarLocations extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Change bars are in the left margin.
			 * @type {Adobe.Indesign.ChangebarLocations}
			 * @readonly
			 */
			public static readonly LEFT_ALIGN: Adobe.Indesign.ChangebarLocations;
			/**
			 * Alias for LEFT_ALIGN. Change bars are in the left margin.
			 * @type {Adobe.Indesign.ChangebarLocations}
			 * @readonly
			 */
			public static readonly leftAlign: Adobe.Indesign.ChangebarLocations;
			/**
			 * Change bars are in the right margin.
			 * @type {Adobe.Indesign.ChangebarLocations}
			 * @readonly
			 */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.ChangebarLocations;
			/**
			 * Alias for RIGHT_ALIGN. Change bars are in the right margin.
			 * @type {Adobe.Indesign.ChangebarLocations}
			 * @readonly
			 */
			public static readonly rightAlign: Adobe.Indesign.ChangebarLocations;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}